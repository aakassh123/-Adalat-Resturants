"use client";
import Reveal from "./Reveal";

// Kept for backwards compatibility — every page that wraps sections in <ScrollWrapper> now gets the new reveal.
const ScrollWrapper = ({ children, className }) => (
    <Reveal className={className} y={60} amount={0.08}>{children}</Reveal>
);

export default ScrollWrapper;
