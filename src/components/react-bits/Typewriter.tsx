import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    delay?: number;
    className?: string;
    speed?: number;
}

export function Typewriter({ text, delay = 0, className = "", speed = 0.05 }: TypewriterProps) {
    const characters = Array.from(text);

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: { transition: { staggerChildren: speed, delayChildren: delay } },
                hidden: {}
            }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 5 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
