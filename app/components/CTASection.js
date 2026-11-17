"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import styles from './CTASection.module.css';

const CTASection = () => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

    return (
        <section ref={ref} className={styles.section}>
            <motion.div className={styles.bg} style={reduce ? undefined : { y }}>
                <Image src="/hero_philosophy_new.webp" alt="" fill sizes="100vw" className={styles.bgImg} />
            </motion.div>
            <div className={styles.shade} />

            <div className={`container ${styles.container}`}>
                <Reveal as="h2" className={styles.title}>Experience Authentic North Indian Cooking at Adalat Restaurant</Reveal>
                <Reveal as="p" className={styles.text} delay={0.1}>
                    Whether you are visiting us for a meal or exploring a business opportunity,
                    Adalat welcomes you to experience food prepared with care, tradition, and honesty.
                </Reveal>

                <Reveal className={styles.buttons} delay={0.2}>
                    <Link href="/contact" className={styles.btnPrimary}>Visit Our Restaurant</Link>
                    <Link href="/contact" className={styles.btnLight}>Contact Us <ArrowRight size={16} /></Link>
                    <Link href="/philosophy" className={styles.btnOutline}>Explore Handi Philosophy <ArrowRight size={16} /></Link>
                </Reveal>
            </div>
        </section>
    );
};

export default CTASection;
