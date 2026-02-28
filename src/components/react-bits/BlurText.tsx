"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export function BlurText({
    text,
    className = "",
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0, transform: "scale(0.9)" }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1, transform: "scale(1)" } : {}}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            className={className}
        >
            {text}
        </motion.div>
    );
}
