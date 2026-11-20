import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import MediaSection from "../components/MediaSection";
import Link from "next/link";
import styles from "../best-handi-mutton-gorakhpur/page.module.css";
import { siteConfig, telHref, waLink } from "../lib/siteConfig";

export const metadata = {
    title: "Best Non Veg Restaurant in Lucknow | Famous Handi & Mughlai Dishes | Adalat",
    description: "Looking for the best non veg restaurant in Lucknow? Adalat Restaurant in Ashiyana (Kanpur Road) serves authentic slow-cooked Handi Mutton, Handi Chicken, Dum Biryani, and Tandoori starters. Perfect for family dining.",
    keywords: [
        "best non veg restaurant in Lucknow",
        "top non veg restaurant Lucknow",
        "famous non veg food Lucknow",
        "best mutton in Lucknow",
        "best chicken in Lucknow",
        "Ashiyana non veg restaurant",
        "Kanpur Road restaurant Lucknow",
        "family non veg dining Lucknow",
    ],
    alternates: {
        canonical: "https://adalatrestaurant.com/best-non-veg-restaurant-lucknow",
    },
    openGraph: {
        title: "Best Non Veg Restaurant in Lucknow | Adalat Restaurant",
        description: "Taste authentic North Indian & Awadhi non-veg delicacies at Adalat Restaurant in Ashiyana, Lucknow.",
        url: "https://adalatrestaurant.com/best-non-veg-restaurant-lucknow",
        siteName: "Adalat Restaurant",
        type: "website",
        images: [{ url: `${siteConfig.url}/home_hero_new.webp` }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Non Veg Restaurant in Lucknow | Adalat Restaurant",
        description: "Authentic Handi Meat, Chicken, and Biryani in Lucknow.",
    },
};

const foodEstablishmentJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Adalat Restaurant Lucknow",
    "description": "Best Non Veg Restaurant in Lucknow serving Champaran Handi Mutton, Handi Chicken, Awadhi Dum Biryani, and Tandoori Kebabs.",
    "url": "https://adalatrestaurant.com/best-non-veg-restaurant-lucknow",
    "telephone": "+918429397733",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "B/MIG-19, Kanpur Road, Sec-L, LDA Colony, Bangla Bazar Police Chowki, Ashiyana",
        "addressLocality": "Lucknow",
        "addressRegion": "UP",
        "postalCode": "226012",
        "addressCountry": "IN"
    },
    "servesCuisine": ["North Indian", "Mughlai", "Awadhi", "Handi Meat", "Biryani", "Non-Vegetarian"],
    "priceRange": "₹₹",
    "hasMenu": "https://adalatrestaurant.com/menu",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "4850"
    }
};

export default function BestNonVegRestaurantLucknow() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(foodEstablishmentJsonLd) }}
            />
            <Navbar />
            <Hero
                title="Best Non Veg Restaurant in Lucknow"
                subtitle="Authentic woodfire claypot cooking, rich Awadhi gravies, and succulent charcoal tandoori. Welcome to Adalat Restaurant Ashiyana."
                backgroundImage="/home_hero_new.webp"
                ctaText="View Menu"
                ctaLink="/menu"
            />

            <main className={styles.mainWrapper}>
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <h2 className={styles.mainTitle}>Authentic Non-Vegetarian Dining in the City of Nawabs</h2>
                            <p className={styles.leadText}>
                                Lucknow is world-renowned for its culinary standards. At <strong>Adalat Restaurant</strong>, we honor that heritage by bringing together the legendary rustic art of <strong>Champaran Handi cooking</strong> and the refined aromatic subtleties of <strong>Awadhi cuisine</strong>.
                            </p>
                            <p className={styles.leadSubtext}>
                                Located in <strong>Ashiyana on Kanpur Road (LDA Colony)</strong>, Adalat has become the favorite destination for food lovers who appreciate real slow-cooking, authentic spices, and unmatched tenderness.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                <MediaSection isLandingPage={true} />

                <section className={styles.ctaSection}>
                    <div className="container">
                        <h2 className={styles.ctaHeading}>Reserve a Table or Order Online in Lucknow</h2>
                        <p className={styles.ctaText}>
                            Taste the most loved Handi Mutton, Chicken, and Biryani in Lucknow. Dine-in with family or get it delivered hot to your doorstep.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/menu" className={styles.ctaPrimary}>Explore Menu</Link>
                            <a href={telHref("8429397733")} className={styles.ctaSecondary}>Call +91 8429397733</a>
                            <a href={waLink("Hello Adalat Lucknow, I would like to order food.")} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsApp}>
                                WhatsApp Order
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
