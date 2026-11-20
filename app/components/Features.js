"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { ChefHat, Flame, Award, Heart } from 'lucide-react';
import SteamEffect from './SteamEffect';
import styles from './Features.module.css';

const features = [
    {
        icon: <ChefHat size={30} />,
        title: "Master Handi Ustaads",
        description: "Veteran chefs preserving ancestral Champaran and Awadhi slow-cooking techniques perfected over decades.",
        image: "/gallery/mutton-handi.webp",
        video: "/videos/mutton-handi.mp4",
        alt: "Authentic Gorakhpur Special Handi Meat slow-cooked in clay pot at Adalat Restaurant",
    },
    {
        icon: <Flame size={30} />,
        title: "Authentic Mitti ki Handi",
        description: "Slow-simmered in traditional clay pots over woodfire embers, infusing earthy minerals, smoky aroma, and unrivaled taste.",
        image: "/gallery/chicken-handi.webp",
        video: "/videos/handi-signature.mp4",
        alt: "Champaran Handi Chicken prepared in traditional earthen pot at Adalat Restaurant Gorakhpur & Lucknow",
    },
    {
        icon: <Award size={30} />,
        title: "Kacchi Ghani & Pure Spices",
        description: "Pure cold-pressed mustard oil, whole spices roasted and stone-ground fresh daily, and premium tender meat cuts.",
        image: "/gallery/tandoori-chicken.webp",
        alt: "Charcoal roasted Tandoori Chicken with authentic North Indian spices at Adalat Restaurant",
    },
    {
        icon: <Heart size={30} />,
        title: "Dough-Sealed Dum Heritage",
        description: "Every pot is sealed with dough to lock in precious steam and juices, guaranteeing melt-in-mouth tenderness in every bite.",
        image: "/gallery/chicken-biryani.webp",
        alt: "Royal Awadhi Mutton Dum Biryani made with saffron and long-grain basmati at Adalat Restaurant",
    },
];

function Step({ feature, index, active, onActive }) {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });

    useEffect(() => { if (inView) onActive(index); }, [inView, index, onActive]);

    return (
        <article ref={ref} className={`${styles.step} ${active ? styles.stepActive : ''}`}>
            <div className={styles.stepImage}>
                {feature.video ? (
                    <video
                        src={feature.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.cover}
                        poster={feature.image}
                    />
                ) : (
                    <>
                        <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 900px) 100vw, 0px" className={styles.cover} />
                        <SteamEffect />
                    </>
                )}
            </div>
            <div className={styles.stepBody}>
                <span className={styles.stepNum}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
            </div>
        </article>
    );
}

const Features = () => {
    const [active, setActive] = useState(0);
    const reduce = useReducedMotion();

    return (
        <section className={styles.section}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.stage}>
                    <div className={styles.header}>
                        <span className={styles.eyebrow}>Why Adalat</span>
                        <h2 className={styles.heading}>Why Choose Adalat Restaurant in Lucknow?</h2>
                        <p className={styles.subheading}>Decades of expertise, authentic methods, and unwavering dedication to excellence in North Indian cuisine.</p>
                    </div>

                    <div className={styles.frame}>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={active}
                                className={styles.frameImg}
                                initial={reduce ? false : { opacity: 0, scale: 1.08 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={reduce ? undefined : { opacity: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {features[active].video ? (
                                    <video
                                        key={features[active].video}
                                        src={features[active].video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={styles.cover}
                                        poster={features[active].image}
                                    />
                                ) : (
                                    <div className={styles.imageLivingWrapper}>
                                        <Image
                                            src={features[active].image}
                                            alt={features[active].alt}
                                            fill
                                            sizes="(max-width: 900px) 0px, 560px"
                                            className={`${styles.cover} ${styles.livingZoom}`}
                                            priority
                                        />
                                        {/* Cinematic Rising Steam & Simmering Heat Effect */}
                                        <SteamEffect intensity="high" />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                        <div className={styles.liveBadge}>
                            <span className={styles.liveDot} />
                            <span>Slow Cooked & Simmering</span>
                        </div>
                        <div className={styles.frameShade} />
                        <div className={styles.counter}>
                            <strong>{String(active + 1).padStart(2, '0')}</strong>
                            <span>/ {String(features.length).padStart(2, '0')}</span>
                        </div>
                        <div className={styles.progress} aria-hidden="true">
                            {features.map((_, i) => (
                                <span key={i} className={i === active ? styles.pipActive : styles.pip} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.steps}>
                    {features.map((f, i) => (
                        <Step key={f.title} feature={f} index={i} active={i === active} onActive={setActive} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
