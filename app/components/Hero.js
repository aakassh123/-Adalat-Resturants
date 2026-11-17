"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import styles from './Hero.module.css';

/**
 * Scroll-driven hero: background parallax + zoom, content drifts and fades as you scroll.
 * `tall` = full-screen (home). Inner pages use a shorter hero.
 */
const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage, blur = false, tall = false }) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.22]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    const bgStyle = reduce ? undefined : { y: bgY, scale: bgScale };
    const contentStyle = reduce ? undefined : { y: contentY, opacity: contentOpacity };

    return (
        <section ref={ref} className={`${styles.hero} ${tall ? styles.tall : ''}`}>
            <motion.div className={`${styles.media} ${blur ? styles.blur : ''}`} style={bgStyle}>
                {backgroundImage && (
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        quality={72}
                        className={styles.image}
                    />
                )}
            </motion.div>
            <div className={styles.overlay} />

            <div className={`container ${styles.container}`}>
                <motion.div className={styles.content} style={contentStyle}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {title}
                    </motion.h1>

                    <motion.span
                        className={styles.rule}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        aria-hidden="true"
                    />

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                    >
                        {subtitle}
                    </motion.p>

                    {ctaLink && (
                        <motion.div
                            className={styles.buttons}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                        >
                            <Link href={ctaLink} className={styles.primaryBtn}>{ctaText || "Explore"}</Link>
                            <Link href="/contact" className={styles.outlineBtn}>Visit Adalat</Link>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {tall && (
                <div className={styles.scrollCue} aria-hidden="true">
                    <span className={styles.mouse}><span className={styles.dot} /></span>
                    <span className={styles.cueText}>Scroll</span>
                </div>
            )}
        </section>
    );
};

export default Hero;
