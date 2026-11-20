"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Utensils, Award } from 'lucide-react';
import Reveal from './Reveal';
import SteamEffect from './SteamEffect';
import styles from './MenuSection.module.css';

const categories = [
    { id: "all", label: "🔥 All Famous Dishes", count: 6 },
    { id: "mutton", label: "🍖 Famous Mutton", count: 2 },
    { id: "chicken", label: "🍗 Famous Chicken", count: 2 },
    { id: "biryani", label: "🍚 Royal Biryani", count: 1 },
    { id: "tandoor", label: "🍢 Tandoor Starters", count: 1 },
];

const famousDishes = [
    {
        id: "handi-meat",
        name: "Gorakhpur Special Handi Meat",
        hindiName: "गोरखपुर स्पेशल हाँडी मीट",
        category: "mutton",
        categoryLabel: "Iconic Handi Speciality",
        badge: "👑 #1 Most Ordered",
        badgeStyle: "gold",
        cookingTag: "🏺 4h Woodfire Claypot",
        image: "/handi_meat.webp",
        description: "Adalat’s crowning glory. Tender local goat meat slow-simmered inside dough-sealed earthen pots over woodfire embers with intact garlic bulbs and cold-pressed mustard oil until the gravy turns deeply aromatic and luscious.",
        slug: "special-handi-mutton",
    },
    {
        id: "handi-chicken",
        name: "Special Champaran Handi Chicken",
        hindiName: "स्पेशल चंपारण हाँडी चिकन",
        category: "chicken",
        categoryLabel: "Claypot Speciality",
        badge: "⭐ Crowd Favourite",
        badgeStyle: "primary",
        cookingTag: "🔥 Woodfire Simmered",
        image: "/gallery/chicken-handi.webp",
        description: "Farm-fresh chicken slow-steamed inside sealed clay handi, bathed in crushed ginger, whole black peppercorns, and roasted cumin that yields an intensely rich, comforting gravy.",
        slug: "chicken-curry",
    },
    {
        id: "mutton-biryani",
        name: "Royal Awadhi Mutton Dum Biryani",
        hindiName: "रॉयल अवधी मटन दम बिरयानी",
        category: "biryani",
        categoryLabel: "Royal Feast",
        badge: "🏆 Heritage Recipe",
        badgeStyle: "gold",
        cookingTag: "🌾 Aged Daawat Basmati",
        image: "/gallery/mutton-biryani.webp",
        description: "A royal Nawabi feast. Premium long-grain basmati rice layered over spiced marinated mutton, infused with saffron, kewra, and golden caramelized onions, slow dum-cooked to aromatic perfection.",
        slug: "mutton-curry-speciality",
    },
    {
        id: "tandoori-chicken",
        name: "Charcoal Roasted Tandoori Chicken",
        hindiName: "चारकोल रोस्टेड तंदूरी चिकन",
        category: "tandoor",
        categoryLabel: "Charcoal Starter",
        badge: "🔥 Charcoal Roasted",
        badgeStyle: "fire",
        cookingTag: "🪵 Live Charcoal Heat",
        image: "/gallery/tandoori-chicken.webp",
        description: "Chicken marinated overnight in thick hung curd, Kashmiri deghi mirch, and roasted spices, skewered into intense clay tandoor flames for that irresistible charcoal smokiness.",
        slug: "chicken-curry",
    },
    {
        id: "butter-chicken",
        name: "Adalat Royal Butter Chicken",
        hindiName: "अदालत रॉयल बटर चिकन",
        category: "chicken",
        categoryLabel: "Classic Curry",
        badge: "✨ Timeless Classic",
        badgeStyle: "primary",
        cookingTag: "🧈 Pure Butter & Cream",
        image: "/butter_chicken.webp",
        description: "Charcoal-tandoori chicken pieces simmered in a sun-ripened tomato and cashew nut makhani gravy, finished with fragrant kasuri methi and generous dollops of pure white butter.",
        slug: "chicken-curry",
    },
    {
        id: "chicken-tikka",
        name: "Succulent Chicken Tikka (Boneless)",
        hindiName: "चिकन टिक्का (बोनलेस)",
        category: "tandoor",
        categoryLabel: "Clay Oven Starter",
        badge: "🥇 Top Rated Starter",
        badgeStyle: "fire",
        cookingTag: "🍢 Clay Oven Roasted",
        image: "/gallery/chicken-tikka-boneless.webp",
        description: "Bite-sized cubes of boneless chicken soaked in mustard oil, ajwain, and artisanal garam masala, then flame-roasted on skewers to golden, smoky perfection.",
        slug: "chicken-curry",
    },
];

const MenuSection = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredDishes = activeTab === "all"
        ? famousDishes
        : famousDishes.filter(d => d.category === activeTab);

    return (
        <section className={styles.section} id="popular-dishes" aria-label="Most Famous Dishes at Adalat">
            {/* Ambient Background Warm Glow */}
            <div className={styles.ambientGlow} />

            <div className={`container ${styles.container}`}>
                {/* Section Header */}
                <div className={styles.header}>
                    <Reveal as="div" className={styles.eyebrowWrapper}>
                        <span className={styles.eyebrow}>
                            <Award size={15} className={styles.eyebrowIcon} />
                            Adalat Hall of Fame • सर्वाधिक लोकप्रिय व्यंजन
                        </span>
                    </Reveal>

                    <Reveal as="h2" className={styles.heading} delay={0.06}>
                        Dishes That Made Us <span className={styles.goldText}>Famous</span>
                    </Reveal>

                    <Reveal as="p" className={styles.subheading} delay={0.12}>
                        Over 500,000+ satisfied food lovers across Gorakhpur and Lucknow.
                        These are the iconic, slow-cooked non-vegetarian dishes that every table asks for first.
                    </Reveal>

                    {/* Interactive Category Filter Pills */}
                    <Reveal delay={0.18}>
                        <div className={styles.tabsWrapper}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`${styles.tabBtn} ${activeTab === cat.id ? styles.tabActive : ''}`}
                                    aria-pressed={activeTab === cat.id}
                                >
                                    <span>{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>

                {/* Famous Dishes Grid */}
                <motion.div layout className={styles.dishesGrid}>
                    <AnimatePresence mode="popLayout">
                        {filteredDishes.map((dish, index) => (
                            <motion.article
                                layout
                                key={dish.id}
                                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                className={styles.dishCard}
                            >
                                {/* Media & Image Container */}
                                <Link href={`/menu/${dish.slug}`} className={styles.imageWrap}>
                                    <Image
                                        src={dish.image}
                                        alt={`${dish.name} - Authentic ${dish.categoryLabel} at Adalat Restaurant Gorakhpur & Lucknow`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                        className={styles.dishImage}
                                    />
                                    {/* Realistic Rising Steam ("Garam Garam Bhaaf") */}
                                    <SteamEffect />

                                    {/* Vignette Overlay for Image Contrast */}
                                    <div className={styles.imageOverlay} />

                                    {/* Popularity Badge */}
                                    <span className={`${styles.badge} ${styles['badge_' + dish.badgeStyle]}`}>
                                        {dish.badge}
                                    </span>

                                    {/* Cooking Method Tag */}
                                    <span className={styles.cookingTag}>
                                        {dish.cookingTag}
                                    </span>
                                </Link>

                                {/* Dish Content Body */}
                                <div className={styles.cardBody}>
                                    {/* Category Subtitle */}
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardCategory}>{dish.categoryLabel}</span>
                                        <span className={styles.hindiName}>{dish.hindiName}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className={styles.dishTitle}>
                                        <Link href={`/menu/${dish.slug}`} className={styles.dishTitleLink}>
                                            {dish.name}
                                        </Link>
                                    </h3>

                                    {/* Sensory Appetite Description */}
                                    <p className={styles.dishDescription}>
                                        {dish.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Callout Banner */}
                <Reveal delay={0.25}>
                    <div className={styles.menuBanner}>
                        <div className={styles.bannerContent}>
                            <span className={styles.bannerBadge}>
                                <Sparkles size={14} /> 50+ Delicacies Available
                            </span>
                            <h3 className={styles.bannerHeading}>
                                Craving something else? Explore our complete North Indian menu.
                            </h3>
                            <p className={styles.bannerText}>
                                From royal mutton rogan josh to charcoal kebabs, buttery garlic naans and sweet desserts — explore our full chef-curated selection.
                            </p>
                        </div>
                        <div className={styles.bannerActions}>
                            <Link href="/menu" className={styles.bannerBtn}>
                                <Utensils size={17} />
                                <span>Browse Complete Menu</span>
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default MenuSection;
