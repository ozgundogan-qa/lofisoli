import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
    ErrorCode,
    McpError,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";
import { z } from "zod";

const FIGMA_API_BASE = "https://api.figma.com/v1";
const FIGMA_TOKEN = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;

if (!FIGMA_TOKEN) {
    console.error("FIGMA_PERSONAL_ACCESS_TOKEN environment variable is required");
    process.exit(1);
}

const figmaClient = axios.create({
    baseURL: FIGMA_API_BASE,
    headers: {
        "X-Figma-Token": FIGMA_TOKEN,
    },
});

const server = new Server(
    {
        name: "figma-mcp-server",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

/**
 * Tool definitions
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "get_file",
                description: "Get metadata and document structure for a Figma file.",
                inputSchema: {
                    type: "object",
                    properties: {
                        fileKey: {
                            type: "string",
                            description: "The unique key for the Figma file.",
                        },
                    },
                    required: ["fileKey"],
                },
            },
            {
                name: "get_file_nodes",
                description: "Get specific nodes from a Figma file.",
                inputSchema: {
                    type: "object",
                    properties: {
                        fileKey: {
                            type: "string",
                            description: "The unique key for the Figma file.",
                        },
                        ids: {
                            type: "array",
                            items: { type: "string" },
                            description: "A list of node IDs to retrieve.",
                        },
                    },
                    required: ["fileKey", "ids"],
                },
            },
            {
                name: "get_image",
                description: "Get rendered images for nodes in a Figma file.",
                inputSchema: {
                    type: "object",
                    properties: {
                        fileKey: {
                            type: "string",
                            description: "The unique key for the Figma file.",
                        },
                        ids: {
                            type: "array",
                            items: { type: "string" },
                            description: "A list of node IDs to render.",
                        },
                        format: {
                            type: "string",
                            enum: ["png", "jpg", "svg", "pdf"],
                            default: "png",
                        },
                        scale: {
                            type: "number",
                            description: "Image scale factor (1-4).",
                            default: 1,
                        },
                    },
                    required: ["fileKey", "ids"],
                },
            },
        ],
    };
});

/**
 * Tool execution
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
        switch (name) {
            case "get_file": {
                const { fileKey } = z.object({ fileKey: z.string() }).parse(args);
                const response = await figmaClient.get(`/files/${fileKey}`);
                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(response.data, null, 2),
                        },
                    ],
                };
            }

            case "get_file_nodes": {
                const { fileKey, ids } = z
                    .object({
                        fileKey: z.string(),
                        ids: z.array(z.string()),
                    })
                    .parse(args);
                const idsParam = ids.join(",");
                const response = await figmaClient.get(
                    `/files/${fileKey}/nodes?ids=${idsParam}`
                );
                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(response.data, null, 2),
                        },
                    ],
                };
            }

            case "get_image": {
                const { fileKey, ids, format, scale } = z
                    .object({
                        fileKey: z.string(),
                        ids: z.array(z.string()),
                        format: z.string().optional().default("png"),
                        scale: z.number().optional().default(1),
                    })
                    .parse(args);
                const idsParam = ids.join(",");
                const response = await figmaClient.get(
                    `/images/${fileKey}?ids=${idsParam}&format=${format}&scale=${scale}`
                );
                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(response.data, null, 2),
                        },
                    ],
                };
            }

            default:
                throw new McpError(
                    ErrorCode.MethodNotFound,
                    `Unknown tool: ${name}`
                );
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            return {
                isError: true,
                content: [
                    {
                        type: "text",
                        text: `Figma API error: ${error.response?.data?.message || error.message}`,
                    },
                ],
            };
        }
        throw error;
    }
});

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Figma MCP server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
