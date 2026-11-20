"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

/**
 * Scroll-driven hero: background parallax + zoom, content drifts and fades as you scroll.
 * `tall` = full-screen (home). Inner pages use a shorter hero.
 */
const Hero = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage,
    blur = false,
    tall = false,
    showLogo = false,
    showHighlights = false,
}) => {
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
                        alt="Adalat Restaurant - Authentic Handi Mutton, Chicken & Awadhi Biryani in Gorakhpur & Lucknow"
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
                    {showHighlights && (
                        <motion.div
                            className={styles.topBadge}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.05 }}
                        >
                            <Sparkles size={14} className={styles.badgeSparkle} />
                            <span>Gorakhpur & Lucknow’s Most Loved Non-Veg Landmark</span>
                        </motion.div>
                    )}

                    {showLogo && (
                        <motion.div
                            className={styles.heroLogoWrapper}
                            initial={{ opacity: 0, scale: 0.9, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Image
                                src="/logo.png"
                                alt="Adalat Restaurant Official Logo - Best Non Veg Restaurant in Gorakhpur & Lucknow"
                                width={200}
                                height={100}
                                className={styles.heroLogo}
                                priority
                            />
                        </motion.div>
                    )}

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
                            <Link href={ctaLink} className={styles.primaryBtn}>{ctaText || "Explore Menu"}</Link>
                            <Link href="#popular-dishes" className={styles.outlineBtn}>Famous Dishes</Link>
                        </motion.div>
                    )}

                    {showHighlights && (
                        <>
                            {/* Mouthwatering Quick Specialities Bar */}
                            <motion.div
                                className={styles.heroHighlights}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.65 }}
                            >
                                <span className={styles.highlightsLabel}>Iconic Specialities:</span>
                                <div className={styles.highlightsGrid}>
                                    <Link href="#popular-dishes" className={styles.highlightPill}>
                                        <span className={styles.pillIcon}>🏺</span>
                                        <span className={styles.pillText}>Handi Meat</span>
                                        <span className={styles.pillTag}>#1 Famous</span>
                                    </Link>
                                    <Link href="#popular-dishes" className={styles.highlightPill}>
                                        <span className={styles.pillIcon}>🍗</span>
                                        <span className={styles.pillText}>Handi Chicken</span>
                                        <span className={styles.pillTag}>Bestseller</span>
                                    </Link>
                                    <Link href="#popular-dishes" className={styles.highlightPill}>
                                        <span className={styles.pillIcon}>🍚</span>
                                        <span className={styles.pillText}>Dum Biryani</span>
                                        <span className={styles.pillTag}>Royal Feast</span>
                                    </Link>
                                    <Link href="#popular-dishes" className={styles.highlightPill}>
                                        <span className={styles.pillIcon}>🔥</span>
                                        <span className={styles.pillText}>Charcoal Tandoori</span>
                                        <span className={styles.pillTag}>Juicy</span>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Trust & Accolades Row */}
                            <motion.div
                                className={styles.trustRow}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            >
                                <span className={styles.trustItem}>
                                    ⭐ <strong>4.8★ Rating</strong> (15,000+ Reviews)
                                </span>
                                <span className={styles.trustDot}>•</span>
                                <span className={styles.trustItem}>
                                    🏺 <strong>100% Earthen Clay Pot</strong> on Live Woodfire
                                </span>
                                <span className={styles.trustDot}>•</span>
                                <span className={styles.trustItem}>
                                    📍 <strong>Kunraghat, Gorakhpur & Gomti Nagar, Lucknow</strong>
                                </span>
                            </motion.div>
                        </>
                    )}
                </motion.div>
            </div>

            {tall && (
                <div className={styles.scrollCue} aria-hidden="true">
                    <span className={styles.mouse}><span className={styles.dot} /></span>
                    <span className={styles.cueText}>Scroll To Taste</span>
                </div>
            )}
        </section>
    );
};

export default Hero;
