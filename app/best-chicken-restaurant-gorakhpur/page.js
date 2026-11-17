import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Chicken Restaurant in Gorakhpur | Adalat Restaurant",
    description: "Looking for the Best Chicken Restaurant in Gorakhpur? Visit Adalat Restaurant for authentic butter chicken, handi chicken, chicken biryani & tandoori platters. Freshly prepared with traditional spices.",
    keywords: "best chicken restaurant in Gorakhpur, chicken restaurant Gorakhpur, butter chicken Gorakhpur, handi chicken Gorakhpur, chicken biryani Gorakhpur, tandoori chicken Gorakhpur, non veg restaurant Gorakhpur",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-chicken-restaurant-gorakhpur",
    },
    openGraph: {
        title: "Best Chicken Restaurant in Gorakhpur | Adalat Restaurant",
        description: "Authentic chicken dishes prepared with traditional spices at Adalat Restaurant, Gorakhpur. Butter chicken, handi chicken, biryani & more.",
        url: "https://adalatrestaurant.com/best-chicken-restaurant-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Adalat%20Special.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Chicken Restaurant in Gorakhpur | Adalat Restaurant",
        description: "Authentic chicken dishes at Adalat Restaurant, Gorakhpur. Experience rich flavors, traditional spices & premium dining.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Adalat Restaurant",
    "description": "Best Chicken Restaurant in Gorakhpur serving authentic butter chicken, handi chicken, chicken biryani, and tandoori platters.",
    "url": "https://adalatrestaurant.com/best-chicken-restaurant-gorakhpur",
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
        "ratingValue": "4.5",
        "reviewCount": "200"
    }
};

const reasons = [
    { icon: "🍗", text: "Freshly prepared chicken dishes using premium quality ingredients" },
    { icon: "🌶️", text: "Authentic North Indian and Mughlai flavors in every bite" },
    { icon: "✨", text: "Hygienic kitchen with strict food safety standards" },
    { icon: "🏠", text: "Comfortable family dining atmosphere for all occasions" },
    { icon: "🎉", text: "Perfect for lunch, dinner, and special celebrations" },
    { icon: "🍽️", text: "Wide variety of chicken starters, curries, and grills" },
];

const BASE = "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/";
const img = (name) => `${BASE}${encodeURIComponent(name)}`;

export default function BestChickenRestaurantGorakhpur() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <Hero
                title="Best Chicken Restaurant in Gorakhpur"
                subtitle="Authentic flavors, traditional spices, and perfectly cooked chicken dishes that create an unforgettable dining experience."
                backgroundImage={img("Chicken Adalat Special.jpg")}
                ctaText="View Our Menu"
                ctaLink="/menu"
            />

            <main>
                {/* Intro */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                Looking for the <strong>Best Chicken Restaurant in Gorakhpur</strong>? Welcome to <strong>Adalat Restaurant</strong> — where rich flavors, authentic spices, and perfectly cooked chicken dishes come together for an unforgettable experience. From creamy butter chicken to sizzling tandoori platters, every dish is made fresh with traditional recipes loved by food lovers across Gorakhpur.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: Image Left + Text Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Authentic Flavor of North Indian Chicken Dishes</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Butter Chicken.jpg")}
                                        alt="Authentic Butter Chicken at Adalat Restaurant Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        At Adalat Restaurant, we believe great food starts with quality ingredients and expert cooking. Our chefs prepare every chicken dish with carefully selected spices and traditional techniques to bring out authentic North Indian and Mughlai flavors.
                                    </p>
                                    <p>
                                        Whether you are visiting with family, friends, or ordering for a special occasion, our chicken menu offers the perfect combination of taste, aroma, and satisfaction that keeps our guests coming back time and again.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>10+</span>
                                            <span className={styles.statLbl}>Chicken Dishes</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.5★</span>
                                            <span className={styles.statLbl}>Customer Rating</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>100%</span>
                                            <span className={styles.statLbl}>Fresh Daily</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Choose Us */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why We Are the Best Chicken Restaurant in Gorakhpur</h2>
                            <p className={styles.sectionSubtext}>
                                Food lovers across Gorakhpur choose Adalat Restaurant for its delicious taste, quality service, and memorable dining experience.
                            </p>
                            <ul className={styles.reasonsGrid}>
                                {reasons.map((r, i) => (
                                    <li key={i} className={styles.reasonCard}>
                                        <span className={styles.reasonIcon}>{r.icon}</span>
                                        <span className={styles.reasonText}>{r.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 2: Text Left + Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Perfect Destination for Chicken Lovers in Gorakhpur</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        If you are searching for delicious chicken dishes with authentic taste and premium quality, <strong>Adalat Restaurant</strong> is the perfect place to visit. We serve food that satisfies every craving — from spicy curries to flavourful grilled preparations made with passion and expertise.
                                    </p>
                                    <p>
                                        Our restaurant offers a warm and welcoming atmosphere where families, friends, and food enthusiasts can gather and enjoy the rich heritage of North Indian non-vegetarian cuisine. Every visit to Adalat is a celebration of authentic flavors and traditional cooking.
                                    </p>
                                    <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <Link href="/menu" className="btn btn-primary">Explore Our Menu</Link>
                                        <Link href="/contact" className="btn">Get Directions</Link>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Handi Combo.jpg")}
                                        alt="Chicken Handi Combo at Adalat - Best Chicken Restaurant Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
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
                                <h2 className={styles.ctaHeading}>Visit the Best Chicken Restaurant in Gorakhpur</h2>
                                <p className={styles.ctaText}>
                                    Enjoy mouth-watering chicken dishes with your family and friends at Adalat Restaurant. Experience premium hospitality, authentic flavors, and delicious food all in one place.
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
