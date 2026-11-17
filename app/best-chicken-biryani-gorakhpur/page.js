import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Chicken Biryani in Gorakhpur | Adalat Restaurant",
    description: "Searching for the Best Chicken Biryani in Gorakhpur? Adalat Restaurant serves authentic Mughlai chicken biryani with long-grain basmati rice, aromatic spices & perfectly cooked chicken. Visit us today!",
    keywords: "best chicken biryani in Gorakhpur, chicken biryani Gorakhpur, authentic biryani Gorakhpur, Mughlai biryani Gorakhpur, biryani restaurant Gorakhpur, basmati chicken biryani",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-chicken-biryani-gorakhpur",
    },
    openGraph: {
        title: "Best Chicken Biryani in Gorakhpur | Adalat Restaurant",
        description: "Authentic Mughlai chicken biryani with aromatic spices at Adalat Restaurant, Gorakhpur. Premium basmati rice, fresh chicken, traditional recipe.",
        url: "https://adalatrestaurant.com/best-chicken-biryani-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Biryani.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Chicken Biryani in Gorakhpur | Adalat Restaurant",
        description: "Authentic Mughlai chicken biryani with premium basmati rice & fresh chicken at Adalat Restaurant, Gorakhpur.",
    },
};

const BASE = "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/";
const img = (name) => `${BASE}${encodeURIComponent(name)}`;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Adalat Restaurant",
    "description": "Best Chicken Biryani in Gorakhpur — authentic Mughlai biryani prepared with long-grain basmati rice, fresh chicken, and handpicked aromatic spices.",
    "url": "https://adalatrestaurant.com/best-chicken-biryani-gorakhpur",
    "telephone": "+919936407733",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool",
        "addressLocality": "Gorakhpur",
        "addressRegion": "UP",
        "postalCode": "273008",
        "addressCountry": "IN"
    },
    "servesCuisine": ["North Indian", "Mughlai", "Biryani", "Non-Vegetarian"],
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
        "ratingValue": "4.7",
        "reviewCount": "250"
    }
};

const whyFamous = [
    { icon: "🌾", title: "Premium Basmati Rice", desc: "Long-grain basmati rice for every serving — fragrant, fluffy, and perfectly cooked." },
    { icon: "🌸", title: "Rich Aroma & Flavor", desc: "Our unique blend of handpicked spices creates an irresistible aroma in every layer." },
    { icon: "🔥", title: "Dum Cooking Method", desc: "Slow dum technique maintains the moisture, richness, and full flavor of the biryani." },
    { icon: "✨", title: "Hygienic Preparation", desc: "Fresh ingredients and a clean kitchen environment with strict quality standards." },
    { icon: "🎉", title: "Perfect for Occasions", desc: "A family dinner, birthday, or casual meal — our biryani fits every celebration." },
    { icon: "👨‍🍳", title: "Expert Chefs", desc: "Generations of biryani-making expertise in every pot, guaranteeing consistency." },
];

export default function BestChickenBiryaniGorakhpur() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <Hero
                title="Best Chicken Biryani in Gorakhpur"
                subtitle="Aromatic basmati rice, tender chicken, and handpicked Mughlai spices — a biryani experience unlike any other."
                backgroundImage={img("Chicken Biryani.jpg")}
                ctaText="View Our Menu"
                ctaLink="/menu"
            />

            <main>
                {/* Intro */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                Searching for the <strong>Best Chicken Biryani in Gorakhpur</strong>? Visit <strong>Adalat Restaurant</strong> and experience the authentic taste of flavorful biryani prepared with aromatic spices, premium basmati rice, and perfectly cooked chicken. Known for rich Mughlai flavors and traditional cooking, our Chicken Biryani has become a favourite choice for food lovers across Gorakhpur.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: Image Left + Text Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Authentic Taste of Traditional Chicken Biryani</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Biryani.jpg")}
                                        alt="Authentic Chicken Biryani at Adalat Restaurant Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        At Adalat Restaurant, we prepare Chicken Biryani using long-grain basmati rice, fresh chicken, and handpicked spices that create a perfect balance of aroma and taste. Every layer of biryani is cooked carefully to ensure rich flavor and authentic texture in every bite.
                                    </p>
                                    <p>
                                        Our chefs follow traditional cooking techniques inspired by Mughlai and North Indian cuisine, using slow-cooking and dum methods where rice and chicken are layered and cooked together to perfection — making our biryani one of the most loved non-veg dishes in Gorakhpur.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>Dum</span>
                                            <span className={styles.statLbl}>Cooking Method</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>20+</span>
                                            <span className={styles.statLbl}>Premium Spices</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.7★</span>
                                            <span className={styles.statLbl}>Customer Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Famous */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why Our Chicken Biryani is Famous in Gorakhpur</h2>
                            <p className={styles.sectionSubtext}>
                                Every grain of rice, every piece of chicken, and every spice is chosen with care to deliver Gorakhpur's most authentic biryani.
                            </p>
                            <div className={styles.featureGrid}>
                                {whyFamous.map((item, i) => (
                                    <div key={i} className={styles.featureCard}>
                                        <div className={styles.featureIcon}>{item.icon}</div>
                                        <h3 className={styles.featureTitle}>{item.title}</h3>
                                        <p className={styles.featureDesc}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 2: Text Left + Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Experience Authentic Mughlai Flavor</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        Our biryani brings the rich, royal taste of <strong>Mughlai cuisine</strong> to Gorakhpur, making every bite a truly delightful experience. Inspired by centuries-old cooking traditions, Adalat's biryani uses slow dum cooking where rice and chicken are layered and cooked together to perfection.
                                    </p>
                                    <p>
                                        With its authentic taste and quality service, Adalat Restaurant is known as the <strong>best place for Chicken Biryani in Gorakhpur</strong>. Pair it with chilled raita, spicy salan, or a fresh salad for the complete biryani experience.
                                    </p>
                                    <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <Link href="/menu" className="btn btn-primary">View Full Menu</Link>
                                        <Link href="/contact" className="btn">Get Directions</Link>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Biryani.jpg")}
                                        alt="Mughlai style biryani at Adalat Restaurant Gorakhpur"
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
                                <h2 className={styles.ctaHeading}>Visit for the Best Chicken Biryani in Gorakhpur</h2>
                                <p className={styles.ctaText}>
                                    If you want to enjoy rich, flavorful, and authentic Chicken Biryani, visit Adalat Restaurant today. Experience traditional cooking, delicious taste, and premium hospitality with your family and friends.
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
