"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import styles from './HandiSection.module.css';

const HandiSection = () => {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
    const frameY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2.5, 2.5]);

    return (
        <section ref={ref} className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.imageCol}>
                    <motion.div className={styles.frame} style={reduce ? undefined : { y: frameY, rotate }}>
                        <motion.div className={styles.parallax} style={reduce ? undefined : { y: imgY, scale: 1.18 }}>
                            <Image
                                src="/handi-dish.webp"
                                alt="Handi Special"
                                fill
                                sizes="(max-width: 900px) 90vw, 560px"
                                className={styles.image}
                            />
                        </motion.div>
                    </motion.div>
                    <span className={styles.badge}>Signature</span>
                </div>

                <div className={styles.contentCol}>
                    <Reveal as="span" className="eyebrow">Our Signature</Reveal>
                    <Reveal as="h2" className={styles.title} delay={0.05}>Our Handi Speciality</Reveal>

                    <Reveal as="p" className={styles.text} delay={0.12}>
                        One of Adalat’s most loved offerings is our Handi preparation, especially the
                        <strong> Gorakhpur Special Handi Meat</strong>, known for its deep flavours and rich texture.
                    </Reveal>

                    <Reveal as="p" className={styles.text} delay={0.2}>
                        Prepared using traditional handi cooking techniques, this dish reflects regional influence
                        and authentic taste, making it a favourite among guests who enjoy classic North Indian non-vegetarian food.
                    </Reveal>

                    <Reveal delay={0.28}>
                        <Link href="/philosophy" className={styles.btn}>
                            Explore Handi Philosophy <ArrowRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default HandiSection;
