"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { ChefHat, Flame, Award, Heart } from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        icon: <ChefHat size={30} />,
        title: "Master Chefs",
        description: "Experienced chefs preserving traditional cooking methods passed down through generations.",
        image: "/gallery/mutton-handi.webp",
        alt: "Mutton handi prepared by Adalat's master chefs",
    },
    {
        icon: <Flame size={30} />,
        title: "Authentic Handi",
        description: "Slow-cooked in traditional clay pots over wood fire for unmatched flavor and aroma.",
        image: "/gallery/chicken-handi.webp",
        alt: "Chicken handi slow-cooked in a traditional clay pot",
    },
    {
        icon: <Award size={30} />,
        title: "Premium Quality",
        description: "Only the finest ingredients and spices, sourced fresh daily for authentic taste.",
        image: "/gallery/tandoori-chicken.webp",
        alt: "Tandoori chicken made with fresh premium ingredients",
    },
    {
        icon: <Heart size={30} />,
        title: "Heritage Recipes",
        description: "Time-tested recipes that have delighted families for generations.",
        image: "/gallery/chicken-biryani.webp",
        alt: "Chicken biryani from a heritage family recipe",
    },
];

function Step({ feature, index, active, onActive }) {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });

    useEffect(() => { if (inView) onActive(index); }, [inView, index, onActive]);

    return (
        <article ref={ref} className={`${styles.step} ${active ? styles.stepActive : ''}`}>
            <div className={styles.stepImage}>
                <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 900px) 100vw, 0px" className={styles.cover} />
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
                                <Image
                                    src={features[active].image}
                                    alt={features[active].alt}
                                    fill
                                    sizes="(max-width: 900px) 0px, 560px"
                                    className={styles.cover}
                                />
                            </motion.div>
                        </AnimatePresence>
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
