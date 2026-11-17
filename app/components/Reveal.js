"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal. Respects prefers-reduced-motion.
 * <Reveal delay={0.1} y={40} as="h2">…</Reveal>
 */
const Reveal = ({ children, delay = 0, y = 40, x = 0, as = "div", once = true, amount = 0.2, className, ...rest }) => {
    const reduce = useReducedMotion();
    const Comp = motion[as] || motion.div;

    if (reduce) {
        return <Comp className={className} {...rest}>{children}</Comp>;
    }

    return (
        <Comp
            className={className}
            initial={{ opacity: 0, y, x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once, amount }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </Comp>
    );
};

export default Reveal;
