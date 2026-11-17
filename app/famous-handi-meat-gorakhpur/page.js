import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Famous Handi Meat in Gorakhpur | Adalat Restaurant",
    description: "Experience the legendary, famous handi meat in Gorakhpur at Adalat Restaurant. We serve slow-cooked Handi Mutton & Chicken prepared in traditional clay pots.",
    alternates: {
        canonical: "https://adalatrestaurant.com/famous-handi-meat-gorakhpur",
    },
    openGraph: {
        title: "Famous Handi Meat in Gorakhpur | Adalat Restaurant",
        description: "Taste the rich, smoky, and slow-cooked Handi Meat at Adalat Restaurant. Traditional earthen pots, coal dum, and authentic spices make it legendary.",
        url: "https://adalatrestaurant.com/famous-handi-meat-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        // TODO: replace GitHub raw image URL with self-hosted asset
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Handi.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Famous Handi Meat in Gorakhpur | Adalat Restaurant",
        description: "Discover our traditional clay-pot Handi Mutton and Chicken, slow-cooked to perfection over burning charcoal at Adalat.",
    },
};

// TODO: replace GitHub raw image URL with self-hosted asset
const BASE = "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/";
const img = (name) => `${BASE}${encodeURIComponent(name)}`;

const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Adalat Restaurant",
    // TODO: replace GitHub raw image URL with self-hosted asset
    "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Handi.jpg",
    "url": "https://adalatrestaurant.com/famous-handi-meat-gorakhpur",
    "telephone": "+919936407733",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool",
        "addressLocality": "Gorakhpur",
        "addressRegion": "UP",
        "postalCode": "273008",
        "addressCountry": "IN"
    },
    "servesCuisine": "North Indian, Mughlai",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "00:00"
    }
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What makes handi meat different from regular kadhai-cooked meat?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Handi meat is cooked inside a sealed clay pot over slow charcoal fire for hours, instead of a quick 30–45 minute cook in a metal kadhai. This locks in moisture and infuses a deep, smoky, earthy flavor that kadhai cooking simply can't replicate."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to cook your handi meat?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our handi meat is slow-cooked for about 4 hours over charcoal embers, which is what makes the meat fall-off-the-bone tender."
            }
        },
        {
            "@type": "Question",
            "name": "Can I dine in and have it served in the actual clay pot?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve our handi curries directly to your table in the earthen pot they're cooked in, so it stays hot and you get the full smoky aroma."
            }
        },
        {
            "@type": "Question",
            "name": "Is handi meat available for takeaway or delivery?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we pack handi meat orders in secure, insulated containers for delivery and takeaway, so it arrives hot and fresh."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer both handi chicken and handi mutton?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve both — our handi mutton is cooked with fresh goat meat, and our handi chicken with tomatoes, yogurt, and Mughlai spices, both finished in the traditional clay pot."
            }
        }
    ]
};

const features = [
    { icon: "🏺", title: "Authentic Clay Pots", desc: "We cook exclusively in hand-molded clay pots, which absorb moisture and infuse the dish with a rich, natural earthy flavor." },
    { icon: "🔥", title: "Slow Charcoal Cooking", desc: "Our handi meat is cooked slowly over low charcoal fires for hours, making the meat incredibly tender and juicy." },
    { icon: "🌿", title: "Hand-Crushed Spices", desc: "We never use pre-packaged spice mixes. Our spices are toasted and ground fresh daily for an intense aroma." },
    { icon: "🧴", title: "Pure Mustard Oil & Ghee", desc: "We cook our handi dishes using premium mustard oil and pure desi ghee, creating a rich, authentic gravy." },
    { icon: "🥩", title: "Selected Cuts of Meat", desc: "Our chefs hand-select tender, high-quality cuts of mutton and chicken daily to ensure consistency and taste." },
    { icon: "💖", title: "20-Year Culinary Legacy", desc: "Our special recipe has been developed and perfected over twenty years, establishing a true benchmark of taste." }
];

const bestPairings = [
    { icon: "🫓", name: "Butter Naan", desc: "Fluffy tandoori naan with generous butter, perfect for dipping into the thick handi gravy." },
    { icon: "🧄", name: "Garlic Naan", desc: "Aromatic naan topped with fresh chopped garlic and coriander, complementing the spices." },
    { icon: "🍚", name: "Basmati Rice", desc: "Steaming hot, fragrant basmati rice to soak up the rich, flavorful handi curry." }
];

export default function FamousHandiMeatGorakhpur() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Navbar />
            <Hero
                title="Famous Handi Meat in Gorakhpur"
                subtitle="Experience the legendary taste of traditional slow-cooked clay pot Handi Mutton and Chicken."
                backgroundImage={img("Mutton Handi.jpg")}
                ctaText="Explore Menu"
                ctaLink="/menu"
            />

            <main>
                {/* Intro Section */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                Welcome to <strong>Adalat Restaurant</strong>, the proud home of the most celebrated and <strong>famous handi meat in Gorakhpur</strong>. If you are an admirer of rustic, traditional Indian cooking, our slow-cooked handi curries are a must-try. Cooked slowly in raw clay pots over a charcoal fire, our Handi Meat offers a unique combination of rich spices, tender meat, and a deep smoky flavor. Discover the true art of slow-cooking and find out why food lovers travel from all over the region to experience our legendary clay pot delicacies.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: The Clay Pot Legend - Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>The Magic of Traditional Clay Pot Cooking</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        What makes our <strong>handi meat in Gorakhpur</strong> so famous? The secret lies in our adherence to ancient cooking traditions. In a world of fast-paced cooking and pressure cookers, we still prepare our handi curries using raw, earthen clay pots (handis) and slow charcoal embers. Clay is naturally porous, allowing heat and steam to circulate evenly throughout the pot during the hours-long cooking process.
                                    </p>
                                    <p>
                                        This slow, steady cooking technique prevents the meat from drying out, keeping it incredibly juicy and tender. Additionally, the clay neutralizes the acidity of the tomatoes and yogurt in the gravy, resulting in a naturally smooth, sweet-and-savory flavor profile. The earthen pot also adds a distinct, subtle smoky aroma that simply cannot be replicated in metal utensils. To read more about our philosophy, visit our dedicated <Link href="/philosophy">Handi Philosophy</Link> page.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>100%</span>
                                            <span className={styles.statLbl}>Earthen Pots</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4 Hrs</span>
                                            <span className={styles.statLbl}>Slow Cooked</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.9★</span>
                                            <span className={styles.statLbl}>Average Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Handi.jpg")}
                                        alt="Traditional earthen pot Handi Mutton slow-cooking over charcoal"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Our Handi Meat is Famous */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why Adalat's Handi Meat is Legendary</h2>
                            <p className={styles.sectionSubtext}>
                                We combine raw clay pots, charcoal fires, and fresh ingredients to serve Gorakhpur's most authentic handi dishes.
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

                {/* Section 2: Explore Our Handi Specialties - Image Left */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Our Celebrated Handi Offerings</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Handi (1).jpg")}
                                        alt="Famous slow-cooked Handi Chicken curry at Adalat Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        Our signature dish, the famous <Link href="/best-handi-mutton-gorakhpur">handi mutton in Gorakhpur</Link>, features tender cuts of fresh goat meat simmered in a rich gravy of fried onions, garlic, ginger, and our hand-ground spice blend. The meat is cooked until it is tender enough to pull apart easily, absorbing the rich flavors of the gravy.
                                    </p>
                                    <p>
                                        For chicken lovers, we serve our legendary <strong>handi chicken in Gorakhpur</strong>. This dish features fresh chicken pieces cooked with tomatoes, yogurt, and rich Mughlai spices inside a clay pot, resulting in a thick, highly flavorful gravy. If you want to explore other <Link href="/best-chicken-restaurant-gorakhpur">chicken dishes in Gorakhpur</Link>, do check out our dedicated guide.
                                    </p>
                                    <p>
                                        We invite you to explore our full selection of handi dishes, combo meals, and traditional sides on our <Link href="/menu">Food Menu</Link>. If you want to check out our overall non-veg range or learn about our biryanis, read our guides on the <Link href="/best-non-veg-restaurant-gorakhpur">best non veg restaurant in Gorakhpur</Link> and the <Link href="/best-biryani-restaurant-gorakhpur">best biryani restaurant in Gorakhpur</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 3: The Complete Dining Experience - Image Right */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Dine In with Your Family and Friends</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        At Adalat, we believe that sharing a meal is a wonderful way to connect. Our cozy dining area, warm lighting, and traditional theme make us the <Link href="/best-family-restaurant-gorakhpur">best family restaurant in Gorakhpur</Link>. We serve our handi curries directly to your table in the earthen pots they were cooked in, keeping the food hot and preserving the smoky clay aroma.
                                    </p>
                                    <p>
                                        Our attentive team is always happy to explain the traditional cooking process or recommend the best breads and sides to accompany your meal. We are committed to providing great food, excellent hospitality, and a welcoming environment for every guest.
                                    </p>
                                    <p>
                                        For those who prefer to enjoy our dishes at home, we offer fast delivery services. We pack all our delivery orders in secure, insulated containers to ensure your meal arrives hot, fresh, and delicious. To learn more about our story, check out our <Link href="/about">About Us</Link> page.
                                    </p>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Handi Combo.jpg")}
                                        alt="Traditional Handi Chicken curry combo platter served at Adalat Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Pairings Section */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Perfect Breads & Sides</h2>
                            <p className={styles.sectionSubtext}>
                                Complement the rich, smoky flavor of our clay pot curries with our selection of fresh, hot breads and premium rice.
                            </p>
                            <div className={styles.pairingGrid}>
                                {bestPairings.map((p, i) => (
                                    <div key={i} className={styles.pairingCard}>
                                        <div className={styles.pairingIcon}>{p.icon}</div>
                                        <h3 className={styles.pairingName}>{p.name}</h3>
                                        <p className={styles.pairingDesc}>{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Interactive FAQ Section - Beautiful, Semantic, and AEO Optimized */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Frequently Asked Questions (FAQ)</h2>
                            <p className={styles.sectionSubtext}>
                                Got questions about Gorakhpur's famous Handi Meat? We have all the answers!
                            </p>
                            <div className={styles.faqContainer}>
                                <details className={styles.faqItem} open>
                                    <summary className={styles.faqQuestion}>
                                        <span>🏺 What makes handi meat different from regular kadhai-cooked meat?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Handi meat is cooked inside a sealed clay pot over slow charcoal fire for hours, instead of a quick 30–45 minute cook in a metal kadhai. This locks in moisture and infuses a deep, smoky, earthy flavor that kadhai cooking simply can't replicate.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🕙 How long does it take to cook your handi meat?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Our handi meat is slow-cooked for about 4 hours over charcoal embers, which is what makes the meat fall-off-the-bone tender.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🍽️ Can I dine in and have it served in the actual clay pot?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we serve our handi curries directly to your table in the earthen pot they're cooked in, so it stays hot and you get the full smoky aroma.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🛵 Is handi meat available for takeaway or delivery?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we pack handi meat orders in secure, insulated containers for delivery and takeaway, so it arrives hot and fresh.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🍗 Do you offer both handi chicken and handi mutton?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we serve both — our handi mutton is cooked with fresh goat meat, and our handi chicken with tomatoes, yogurt, and Mughlai spices, both finished in the traditional clay pot.
                                        </p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* CTA Section */}
                <ScrollWrapper>
                    <section className={styles.ctaSection}>
                        <div className="container">
                            <div className={styles.ctaContent}>
                                <h2 className={styles.ctaHeading}>Savor Our Famous Handi Meat Today!</h2>
                                <p className={styles.ctaText}>
                                    Ready to experience the ultimate slow-cooked clay pot curry in Gorakhpur? Visit Adalat Restaurant today to enjoy our famous Handi Mutton and Chicken with your friends and family.
                                </p>
                                <div className={styles.ctaAddress}>
                                    <p>📍 Address: Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur, UP 273008</p>
                                    <p>🕙 Timings: Open Daily from 10:00 AM to 12:00 AM</p>
                                    <p>📞 Phone: <a href="tel:+919936407733">+91 99364 07733</a></p>
                                </div>
                                <div className={styles.ctaButtons}>
                                    <Link href="/menu" className="btn btn-primary">Browse Full Menu</Link>
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
