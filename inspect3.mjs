import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';

async function main() {
    const io = new NodeIO();
    const document = await io.read('public/3d-bracelet-object/highres.glb');
    const root = document.getRoot();
    root.listNodes().forEach((node, i) => {
        console.log(`Node ${i} translation:`, node.getTranslation());
        console.log(`Node ${i} scale:`, node.getScale());
    });
    const mesh = root.listMeshes()[0];
    const prim = mesh.listPrimitives()[0];
    const positions = prim.getAttribute('POSITION');
    let min = [Infinity, Infinity, Infinity];
    let max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < positions.getCount(); i++) {
        const v = positions.getElement(i, []);
        min[0] = Math.min(min[0], v[0]);
        min[1] = Math.min(min[1], v[1]);
        min[2] = Math.min(min[2], v[2]);
        max[0] = Math.max(max[0], v[0]);
        max[1] = Math.max(max[1], v[1]);
        max[2] = Math.max(max[2], v[2]);
    }
    console.log(`BBox min: ${min}`);
    console.log(`BBox max: ${max}`);
}
main();
