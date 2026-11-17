"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
    return (
        <motion.div
            aria-hidden="true"
            style={{
                scaleX,
                transformOrigin: "0% 50%",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                zIndex: 2000,
                background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))",
            }}
        />
    );
};

export default ScrollProgress;
