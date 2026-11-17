"use client";
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './MenuSection.module.css';

const items = [
    {
        title: "Gorakhpur Special Handi Meat",
        badge: "Signature",
        description: "Premium cuts slow-cooked with secret family spices in traditional clay handi",
        image: "/handi_meat.webp"
    },
    {
        title: "Handi Chicken",
        badge: "Popular",
        description: "Tender chicken slow-cooked with aromatic spices in traditional handi",
        image: "/handi_chicken.webp"
    },
    {
        title: "Handi Mutton",
        badge: "Chef Special",
        description: "Succulent mutton marinated overnight and cooked to perfection",
        image: "/handi_mutton.webp"
    },
    {
        title: "Butter Chicken",
        badge: "Classic",
        description: "Creamy tomato-based curry with tender grilled chicken",
        image: "/butter_chicken.webp"
    }
];

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Card = ({ item, index }) => (
    <article className={styles.card}>
        <div className={styles.imageWrapper}>
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className={styles.cardImage}
            />
            <span className={styles.badge}>{item.badge}</span>
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
        </div>
    </article>
);

const MenuSection = () => {
    const reduce = useReducedMotion();
    const outer = useRef(null);
    const track = useRef(null);
    const [maxX, setMaxX] = useState(0);

    const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
    const x = useTransform(scrollYProgress, [0.04, 0.96], [0, -maxX]);
    const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useIsoLayoutEffect(() => {
        const measure = () => {
            if (!track.current) return;
            setMaxX(Math.max(0, track.current.scrollWidth - document.documentElement.clientWidth));
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (track.current) ro.observe(track.current);
        window.addEventListener('resize', measure);
        return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
    }, []);

    const header = (
        <div className={`container ${styles.header}`}>
            <span className={styles.eyebrow}>Our Menu</span>
            <h2 className={styles.heading}>Authentic North Indian Menu at Adalat Restaurant</h2>
            <p className={styles.subheading}>
                Beyond our handi specialities, Adalat serves a thoughtfully curated menu of North Indian
                non-vegetarian dishes. Each preparation focuses on balanced spices, hearty gravies, and
                flavours that feel familiar and satisfying.
            </p>
        </div>
    );

    // Reduced motion: plain horizontally scrollable row, no pinning
    if (reduce) {
        return (
            <section className={styles.staticSection}>
                {header}
                <div className={styles.staticRow}>
                    {items.map((item, i) => <Card key={item.title} item={item} index={i} />)}
                </div>
                <div className={styles.more}><Link href="/menu" className={styles.moreBtn}>View Full Menu <ArrowRight size={18} /></Link></div>
            </section>
        );
    }

    return (
        <section ref={outer} className={styles.outer} style={{ height: `${Math.max(220, 90 + items.length * 55)}vh` }}>
            <div className={styles.sticky}>
                {header}
                <motion.div ref={track} className={styles.track} style={{ x }}>
                    {items.map((item, i) => <Card key={item.title} item={item} index={i} />)}
                    <Link href="/menu" className={styles.endCard}>
                        <span>View Full Menu</span>
                        <ArrowRight size={34} />
                    </Link>
                </motion.div>
                <div className={styles.bar} aria-hidden="true"><motion.span style={{ width: barWidth }} /></div>
            </div>
        </section>
    );
};

export default MenuSection;
