'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SteamEffect from '../components/SteamEffect';
import { menuData } from '../data/menuData';
import { siteConfig } from '../lib/siteConfig';
import styles from './menu.module.css';

const categories = Object.keys(menuData);
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function MenuPage() {
    // null = show categories, otherwise the selected category name. Synced with ?category= so it can be shared / bookmarked / used with Back.
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const read = () => {
            const q = new URLSearchParams(window.location.search).get('category');
            setSelectedCategory(categories.find((c) => slugify(c) === q) || null);
        };
        read();
        window.addEventListener('popstate', read);
        return () => window.removeEventListener('popstate', read);
    }, []);

    const select = (category) => {
        const url = category ? `/menu?category=${slugify(category)}` : '/menu';
        window.history.pushState(null, '', url);
        setSelectedCategory(category);
        document.getElementById('menu-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const getCategoryImage = (name) => menuData[name]?.[0]?.image || '/hero.webp';

    return (
        <>
            <Navbar />

            <Hero
                title="Our Menu"
                subtitle="Explore our curated selection of authentic North Indian delicacies."
                backgroundImage="/hero.webp"
                blur
            />

            <main className={styles.main}>
                <div className={styles.container} id="menu-content">
                    <div className={styles.topRow}>
                        <a href={siteConfig.menuPdf} target="_blank" rel="noopener noreferrer" className={styles.viewMenuBtn}>
                            View Full Menu <ExternalLink size={15} />
                        </a>
                    </div>

                    <AnimatePresence mode="wait">
                        {!selectedCategory ? (
                            <motion.div
                                className={styles.categoryGrid}
                                key="categories"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                            >
                                {categories.map((category, index) => (
                                    <motion.button
                                        type="button"
                                        key={category}
                                        className={styles.categoryCard}
                                        onClick={() => select(category)}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ delay: (index % 3) * 0.08, duration: 0.6 }}
                                        aria-label={`Open ${category}`}
                                    >
                                        <span className={styles.categoryImageWrapper}>
                                            <Image
                                                src={getCategoryImage(category)}
                                                alt=""
                                                fill
                                                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 380px"
                                                className={styles.categoryImage}
                                            />
                                            <SteamEffect />
                                            <span className={styles.categoryShade} />
                                        </span>
                                        <span className={styles.categoryContent}>
                                            <span className={styles.categoryTitle}>{category}</span>
                                            <span className={styles.categoryCount}>{menuData[category].length} dishes <ArrowRight size={14} /></span>
                                        </span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="items"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className={styles.navigationBar}>
                                    <button type="button" onClick={() => select(null)} className={styles.backButton}>
                                        <ArrowLeft size={18} /> Back to Categories
                                    </button>
                                    <h2 className={styles.currentCategoryLabel}>{selectedCategory}</h2>
                                </div>

                                <div className={styles.menuGrid}>
                                    {menuData[selectedCategory]?.map((item, index) => (
                                        <Link href={`/menu/${item.slug}`} key={item.id} className={styles.cardLink}>
                                            <motion.article
                                                className={styles.card}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.06, duration: 0.5 }}
                                            >
                                                <div className={styles.itemImageWrapper}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 380px"
                                                        className={styles.productImage}
                                                    />
                                                    <SteamEffect />
                                                </div>
                                                <div className={styles.cardContent}>
                                                    <h3 className={styles.cardTitle}>{item.name}</h3>
                                                    <p className={styles.description}>{item.description}</p>
                                                    <span className={styles.readMore}>View dish <ArrowRight size={14} /></span>
                                                </div>
                                            </motion.article>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </>
    );
}
