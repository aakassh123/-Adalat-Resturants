import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Handi Chicken in Gorakhpur | Adalat Restaurant",
    description: "Craving the most authentic Handi Chicken in Gorakhpur? Adalat Restaurant serves traditional slow-cooked handi chicken with rich Mughlai spices. Perfect for family dining & celebrations.",
    keywords: "best handi chicken in Gorakhpur, handi chicken Gorakhpur, authentic handi chicken, handi chicken restaurant Gorakhpur, slow cooked chicken Gorakhpur, Mughlai handi chicken",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-handi-chicken-gorakhpur",
    },
    openGraph: {
        title: "Best Handi Chicken in Gorakhpur | Adalat Restaurant",
        description: "Authentic slow-cooked Handi Chicken at Adalat Restaurant, Gorakhpur. Rich Mughlai flavors, perfect spices, family dining experience.",
        url: "https://adalatrestaurant.com/best-handi-chicken-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Handi.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Handi Chicken in Gorakhpur | Adalat Restaurant",
        description: "Authentic slow-cooked Handi Chicken with rich Mughlai flavors at Adalat Restaurant, Gorakhpur.",
    },
};

const BASE = "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/";
const img = (name) => `${BASE}${encodeURIComponent(name)}`;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Adalat Restaurant",
    "description": "Best Handi Chicken in Gorakhpur — slow-cooked traditional handi chicken with authentic North Indian and Mughlai spices.",
    "url": "https://adalatrestaurant.com/best-handi-chicken-gorakhpur",
    "telephone": "+919936407733",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool",
        "addressLocality": "Gorakhpur",
        "addressRegion": "UP",
        "postalCode": "273008",
        "addressCountry": "IN"
    },
    "servesCuisine": ["North Indian", "Mughlai", "Non-Vegetarian"],
    "priceRange": "$$",
    "hasMenu": "https://adalatrestaurant.com/menu",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "00:00"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "180"
    }
};

const features = [
    { icon: "🌿", title: "Fresh Ingredients", desc: "Fresh chicken, handpicked spices, and quality ingredients in every single serving." },
    { icon: "🫕", title: "Traditional Cooking", desc: "Slow-cooking techniques that enhance the aroma and depth of richness in the gravy." },
    { icon: "🌶️", title: "Perfect Spice Balance", desc: "The perfect balance of spices — rich, aromatic, and loved by every non-veg food lover." },
    { icon: "✨", title: "Hygienic Preparation", desc: "Every dish is prepared in a clean kitchen with fresh ingredients and daily prep standards." },
    { icon: "🍽️", title: "Family Dining", desc: "A warm and welcoming atmosphere perfect for family dinners and special occasions." },
    { icon: "⭐", title: "Gorakhpur's Top Choice", desc: "Consistently loved by hundreds of loyal customers and top-rated across Gorakhpur." },
];

const pairings = [
    { icon: "🫓", name: "Butter Naan", desc: "Soft fluffy naan that soaks up the rich handi gravy perfectly." },
    { icon: "🧄", name: "Garlic Naan", desc: "Aromatic garlic naan complements the bold spices beautifully." },
    { icon: "🍚", name: "Basmati Rice", desc: "Steamed fragrant rice to savour every drop of rich gravy." },
];

export default function BestHandiChickenGorakhpur() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <Hero
                title="Best Handi Chicken in Gorakhpur"
                subtitle="Slow-cooked to perfection with traditional spices — the rich, smoky handi chicken you've been craving."
                backgroundImage={img("Chicken Handi.jpg")}
                ctaText="View Our Menu"
                ctaLink="/menu"
            />

            <main>
                {/* Intro */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                Craving the most authentic and flavorful <strong>Handi Chicken in Gorakhpur</strong>? <strong>Adalat Restaurant</strong> is your ultimate destination. Known for its rich texture, traditional cooking style, and perfectly balanced spices, our Handi Chicken is a firm favourite among non-veg lovers across the city.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: Image Right + Text Left */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Authentic Taste of Traditional Handi Chicken</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        Handi Chicken is one of the most beloved Indian chicken dishes, loved for its rich flavor and slow-cooked preparation. At Adalat, we prepare our Handi Chicken using traditional recipes and carefully selected spices that bring out the real essence of Mughlai and North Indian cuisine.
                                    </p>
                                    <p>
                                        Our chefs marinate fresh chicken with aromatic spices and cook it slowly in a thick gravy of onions, tomatoes, ginger, and garlic. This traditional method allows the chicken to absorb every spice perfectly, creating a rich and deeply satisfying taste.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>Slow</span>
                                            <span className={styles.statLbl}>Cooked Daily</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>15+</span>
                                            <span className={styles.statLbl}>Aromatic Spices</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.6★</span>
                                            <span className={styles.statLbl}>Customer Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Handi (1).jpg")}
                                        alt="Traditional slow-cooked Handi Chicken at Adalat Restaurant Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Best — Feature Cards */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why We Serve the Best Handi Chicken in Gorakhpur</h2>
                            <p className={styles.sectionSubtext}>
                                Quality and taste are our priority — premium ingredients and authentic cooking methods ensure every customer enjoys the best experience.
                            </p>
                            <div className={styles.featureGrid}>
                                {features.map((f, i) => (
                                    <div key={i} className={styles.featureCard}>
                                        <div className={styles.featureIcon}>{f.icon}</div>
                                        <h3 className={styles.featureTitle}>{f.title}</h3>
                                        <p className={styles.featureDesc}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 2: Image Left + Text Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Perfect for Family Dinner & Celebrations</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Handi Combo.jpg")}
                                        alt="Handi Chicken Combo perfect for family dining at Adalat Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        Whether it's a small celebration, a birthday dinner, or a regular family gathering, Adalat Restaurant provides the best setting and food to make your occasion truly special. Our warm hospitality and consistent quality ensure every visit is memorable.
                                    </p>
                                    <p>
                                        Pair our Handi Chicken with butter naan, garlic naan, or fragrant basmati rice for a wholesome, satisfying meal. With its authentic taste and premium quality, Adalat Restaurant is the <strong>best place for Handi Chicken in Gorakhpur</strong>.
                                    </p>
                                    <div className={styles.pairingGrid} style={{ marginTop: '28px' }}>
                                        {pairings.map((p, i) => (
                                            <div key={i} className={styles.pairingCard}>
                                                <div className={styles.pairingIcon}>{p.icon}</div>
                                                <div className={styles.pairingName}>{p.name}</div>
                                                <div className={styles.pairingDesc}>{p.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* CTA */}
                <ScrollWrapper>
                    <section className={styles.ctaSection}>
                        <div className="container">
                            <div className={styles.ctaContent}>
                                <h2 className={styles.ctaHeading}>Visit the Best Handi Chicken Restaurant in Gorakhpur</h2>
                                <p className={styles.ctaText}>
                                    Visit Adalat Restaurant today to enjoy the most delicious and authentic Handi Chicken in Gorakhpur. Experience traditional flavors, quality service, and premium taste that you will love.
                                </p>
                                <div className={styles.ctaAddress}>
                                    <p>📍 Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur, UP 273008</p>
                                    <p>🕙 Open Daily: 10:00 AM – 12:00 AM</p>
                                    <p>📞 <a href="tel:+919936407733">+91 99364 07733</a></p>
                                </div>
                                <div className={styles.ctaButtons}>
                                    <Link href="/menu" className="btn btn-primary">Explore Our Menu</Link>
                                    <Link href="/contact" className="btn">Get Directions</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>
            </main>
            <Footer />
        </>
    );
}
