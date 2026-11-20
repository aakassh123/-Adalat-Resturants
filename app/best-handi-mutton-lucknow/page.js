import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import MediaSection from "../components/MediaSection";
import SteamEffect from "../components/SteamEffect";
import Link from "next/link";
import styles from "../best-handi-mutton-gorakhpur/page.module.css";
import { siteConfig, telHref, waLink } from "../lib/siteConfig";

export const metadata = {
    title: "Best Handi Mutton in Lucknow | Authentic Champaran Clay Pot Meat | Adalat",
    description: "Craving authentic slow-cooked Handi Mutton in Lucknow? Adalat Restaurant in Ashiyana (Kanpur Road) serves traditional dough-sealed clay pot mutton with rich rustic mustard oil and whole garlic bulbs. Taste fall-off-the-bone tenderness.",
    keywords: [
        "best handi mutton in Lucknow",
        "handi mutton Lucknow",
        "Champaran mutton Lucknow",
        "Ahuna mutton Lucknow",
        "clay pot mutton Lucknow",
        "best mutton curry Lucknow",
        "non veg restaurant Ashiyana Lucknow",
        "mutton restaurant Kanpur Road Lucknow",
        "Adalat Restaurant Lucknow",
    ],
    alternates: {
        canonical: "https://adalatrestaurant.com/best-handi-mutton-lucknow",
    },
    openGraph: {
        title: "Best Handi Mutton in Lucknow | Adalat Restaurant Ashiyana",
        description: "Experience the magic of traditional, slow-cooked Handi Mutton in Lucknow. Clay-pot sealed mutton with rich Awadhi spices at Adalat Restaurant.",
        url: "https://adalatrestaurant.com/best-handi-mutton-lucknow",
        siteName: "Adalat Restaurant",
        type: "website",
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Handi.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Handi Mutton in Lucknow | Adalat Restaurant",
        description: "Savor the authentic taste of slow-cooked clay pot Handi Mutton at Adalat Restaurant in Ashiyana, Lucknow.",
    },
};

const BASE = "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/";
const img = (name) => `${BASE}${encodeURIComponent(name)}`;

const foodEstablishmentJsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Adalat Restaurant Lucknow",
    "description": "Best Handi Mutton in Lucknow — slow-cooked traditional clay pot mutton with authentic Awadhi and Champaran spices.",
    "url": "https://adalatrestaurant.com/best-handi-mutton-lucknow",
    "telephone": "+918429397733",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "B/MIG-19, Kanpur Road, Sec-L, LDA Colony, Bangla Bazar Police Chowki, Ashiyana",
        "addressLocality": "Lucknow",
        "addressRegion": "UP",
        "postalCode": "226012",
        "addressCountry": "IN"
    },
    "servesCuisine": ["North Indian", "Mughlai", "Champaran Mutton", "Ahuna Mutton", "Awadhi", "Non-Vegetarian"],
    "priceRange": "₹₹",
    "hasMenu": "https://adalatrestaurant.com/menu",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "00:00"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "4850"
    }
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Where can I get the best Champaran Handi Mutton in Lucknow?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Adalat Restaurant located in Ashiyana (Kanpur Road, LDA Colony), Lucknow is renowned for serving authentic Champaran and Ahuna style Handi Mutton. Slow-cooked in dough-sealed clay pots over woodfire embers for 4+ hours."
            }
        },
        {
            "@type": "Question",
            "name": "What makes Handi Mutton at Adalat Restaurant Lucknow unique?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We combine the famous rustic Champaran technique with Awadhi finesse. Each earthen clay pot is loaded with tender meat, intact garlic pods, and pure cold-pressed mustard oil, sealed with fresh dough and dum-cooked without pressure cookers."
            }
        },
        {
            "@type": "Question",
            "name": "Is the mutton 100% fresh and halal at Adalat Lucknow?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we procure premium halal-certified goat meat fresh every single morning. We never use frozen meat or artificial tenderizers."
            }
        },
        {
            "@type": "Question",
            "name": "Does Adalat Restaurant Lucknow provide home delivery in Ashiyana?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide hot and fresh delivery across Ashiyana, Kanpur Road, LDA Colony, Alambagh, and surrounding areas in Lucknow. Call +91 8429397733 or order via WhatsApp."
            }
        }
    ]
};

const features = [
    { icon: "🏺", title: "Authentic Clay Pots", desc: "Every portion is cooked in an organic earthen clay handi to ensure a natural rustic aroma." },
    { icon: "🔥", title: "4+ Hours Dum Cooking", desc: "Dough-sealed slow-simmering preserves all the natural juices, making the meat melt-in-the-mouth." },
    { icon: "🧄", title: "Whole Garlic Bulbs", desc: "Infused with whole garlic bulbs (Champaran style) that caramelize into the gravy." },
    { icon: "🍃", title: "Kacchi Ghani Mustard Oil", desc: "Cooked in heated raw mustard oil and stone-pounded whole spices for authentic robust flavor." },
    { icon: "🛡️", title: "100% Fresh Daily", desc: "Fresh, hand-picked halal cuts procured daily. Zero preservatives, zero freezing." },
    { icon: "👨‍👩‍👧‍👦", title: "Family Dining in Ashiyana", desc: "A warm, comfortable restaurant ambiance ideal for family meals and celebrations in Lucknow." },
];

export default function BestHandiMuttonLucknow() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(foodEstablishmentJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />
            <Hero
                title="Best Handi Mutton in Lucknow"
                subtitle="Dough-sealed clay pot mutton slow-cooked to fall-off-the-bone perfection. Taste the authentic Champaran & Awadhi heritage."
                backgroundImage={img("Mutton Handi.jpg")}
                ctaText="Order Online / Menu"
                ctaLink="/menu"
            />

            <main className={styles.mainWrapper}>
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <h2 className={styles.mainTitle}>Savor the Majestic Taste of Slow-Cooked Handi Mutton in Lucknow</h2>
                            <p className={styles.leadText}>
                                A rustic earthen clay pot, sealed tight with fresh wheat dough, simmering gently over slow-burning embers for over four hours. 
                                As our chef cracks open the hard wheat seal, a cloud of rich, aromatic steam billows out, filling the room with an aroma that excites the senses. 
                                That is the magic of the signature <strong>Special Handi Mutton</strong> at <strong>Adalat Restaurant, Lucknow</strong>.
                            </p>
                            <p className={styles.leadSubtext}>
                                Located on <strong>Kanpur Road, Ashiyana (LDA Colony)</strong>, we have brought the authentic tradition of <strong>Champaran (Ahuna) mutton</strong> to Lucknow, paired with royal Awadhi cooking methods.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <h2 className={styles.sectionHeadingLeft}>The Earthen Secret: Clay-Pot Woodfire Cooking</h2>
                                    <p>
                                        At Adalat, we know that modern pressure cookers can never match the soulful taste of a genuine clay handi. Clay allows heat and moisture to circulate gently, tenderizing the meat and infusing it with natural minerals.
                                    </p>
                                    <p>
                                        We marinate tender mutton cuts in heated mustard oil, whole garlic bulbs, hand-ground coriander, cumin, black cardamom, and freshly crushed cinnamon. Sealed with dough and left to simmer for hours, every spoonful is pure indulgence.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4+ Hours</span>
                                            <span className={styles.statLbl}>Slow Simmered</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>100%</span>
                                            <span className={styles.statLbl}>Clay Pot Earthenware</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.8★</span>
                                            <span className={styles.statLbl}>Lucknow Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Handi.jpg")}
                                        alt="Traditional slow-cooked Champaran style Handi Mutton in Lucknow"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                    <SteamEffect intensity="high" />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why Food Lovers in Lucknow Choose Adalat Handi Mutton</h2>
                            <div className={styles.featuresGrid}>
                                {features.map((f, i) => (
                                    <div key={i} className={styles.featureCard}>
                                        <span className={styles.featureIcon}>{f.icon}</span>
                                        <h3 className={styles.featureTitle}>{f.title}</h3>
                                        <p className={styles.featureDesc}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                <MediaSection isLandingPage={true} />

                {/* Branch CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <h2 className={styles.ctaHeading}>Visit Adalat Restaurant in Ashiyana, Lucknow Today</h2>
                        <p className={styles.ctaText}>
                            Experience the richest Handi Mutton in Lucknow with family and friends. Dine-in, Takeaway, and Home Delivery available.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/menu" className={styles.ctaPrimary}>View Full Menu</Link>
                            <a href={telHref("8429397733")} className={styles.ctaSecondary}>Call +91 8429397733</a>
                            <a href={waLink("Hello Adalat Lucknow, I would like to order Handi Mutton.")} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsApp}>
                                Order on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
