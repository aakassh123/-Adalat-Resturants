import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import MediaSection from "../components/MediaSection";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Handi Mutton in Gorakhpur | Slow-Cooked Clay Pot Mutton",
    description: "Craving authentic slow-cooked Handi Mutton in Gorakhpur? Adalat Restaurant serves traditional Champaran/Ahuna style clay pot mutton. Enjoy rich earthy flavors and ultra-tender meat near Ramgarh Taal.",
    keywords: "best handi mutton in Gorakhpur, handi mutton Gorakhpur, Champaran mutton Gorakhpur, Ahuna mutton Gorakhpur, clay pot mutton Gorakhpur, best mutton curry Gorakhpur, non veg restaurant Gorakhpur, mutton restaurant Ramgarh Taal",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-handi-mutton-gorakhpur",
    },
    openGraph: {
        title: "Best Handi Mutton in Gorakhpur | Adalat Restaurant",
        description: "Experience the magic of traditional, slow-cooked Handi Mutton in Gorakhpur. Clay-pot sealed mutton with rich Mughlai spices at Adalat Restaurant.",
        url: "https://adalatrestaurant.com/best-handi-mutton-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Handi.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Handi Mutton in Gorakhpur | Adalat Restaurant",
        description: "Savor the authentic taste of slow-cooked clay pot Handi Mutton at Adalat Restaurant near Ramgarh Taal, Gorakhpur.",
    },
};

const BASE = "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/";
const img = (name) => `${BASE}${encodeURIComponent(name)}`;

const foodEstablishmentJsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Adalat Restaurant",
    "description": "Best Handi Mutton in Gorakhpur — slow-cooked traditional clay pot mutton with authentic North Indian and Champaran spices.",
    "url": "https://adalatrestaurant.com/best-handi-mutton-gorakhpur",
    "telephone": "+919936407733",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool",
        "addressLocality": "Gorakhpur",
        "addressRegion": "UP",
        "postalCode": "273008",
        "addressCountry": "IN"
    },
    "servesCuisine": ["North Indian", "Mughlai", "Champaran Mutton", "Ahuna Mutton", "Non-Vegetarian"],
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
        "ratingValue": "4.8",
        "reviewCount": "210"
    }
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What makes Adalat's Handi Mutton the best in Gorakhpur?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Adalat Restaurant prepares Handi Mutton using genuine organic clay pots, slow-cooked for over 4 hours on a low wood or charcoal flame. We seal the lid with fresh wheat dough (dum style) to lock in all natural aromas, moisture, and spices. The result is exceptionally tender, fall-off-the-bone meat infused with a deep, earthy flavor that is unique in Gorakhpur."
            }
        },
        {
            "@type": "Question",
            "name": "Do you serve Champaran-style or Ahuna Mutton in Gorakhpur?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Special Handi Mutton is inspired by the iconic Champaran and Ahuna mutton cooking styles. We use raw mustard oil, whole garlic bulbs (lehsun), and a secret hand-pounded spice mix, then slow-cook it in sealed clay pots to replicate that legendary rustic, smoky flavor."
            }
        },
        {
            "@type": "Question",
            "name": "Is the mutton fresh and halal at Adalat Restaurant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We procure fresh, high-quality, halal-certified mutton daily. We strictly avoid frozen meat, ensuring our dishes retain maximum tenderness, health value, and natural flavor."
            }
        },
        {
            "@type": "Question",
            "name": "What are the best side dishes and breads to pair with Handi Mutton?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our rich Handi Mutton gravy pairs beautifully with soft Butter Naan, Garlic Naan, or traditional Laccha Paratha. If you prefer rice, our premium steamed fragrant Basmati Rice absorbs the rich mutton juices perfectly."
            }
        },
        {
            "@type": "Question",
            "name": "Where is Adalat Restaurant located in Gorakhpur?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Adalat Restaurant is located at Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur, UP 273008. It is on the main Deoria Road, just minutes away from the scenic Ramgarh Lake."
            }
        }
    ]
};

const features = [
    { icon: "🏺", title: "Authentic Clay Pots", desc: "Every single portion is cooked in a traditional clay handi to ensure a natural, earthy flavor profile." },
    { icon: "🔥", title: "4+ Hours Dum Cooking", desc: "Slow slow-cooking with dough-sealed lids preserves all the natural juices, making meat unbelievably tender." },
    { icon: "🧄", title: "Whole Garlic Bulbs", desc: "Infused with whole garlic bulbs (Champaran style) for a beautifully rich and rustic savoriness." },
    { icon: "🍃", title: "Pure Mustard Oil", desc: "Prepared using traditional heated mustard oil, yielding an authentic aroma and unmatched robust taste." },
    { icon: "🛡️", title: "100% Fresh Daily", desc: "We procure premium, fresh mutton every single morning. Absolutely zero freezing, zero preservatives." },
    { icon: "👨‍👩‍👧‍👦", title: "Elegance near Ramgarh", desc: "A cozy, premium dining ambiance perfect for family gatherings right next to the gorgeous Ramgarh Taal." },
];

const pairings = [
    { icon: "🫓", name: "Laccha Paratha", desc: "Multi-layered crispy wheat bread that tears and dips into the thick gravy beautifully." },
    { icon: "🧄", name: "Garlic Naan", desc: "Aromatic garlic naan complements the robust earthiness of handi mutton." },
    { icon: "🍚", name: "Fragrant Basmati Rice", desc: "Fluffy, long-grain basmati rice to soak up the rich, slow-cooked mutton juices." },
];

export default function BestHandiMuttonGorakhpur() {
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
                title="Best Handi Mutton in Gorakhpur"
                subtitle="Dough-sealed clay pot mutton slow-cooked to fall-off-the-bone perfection. Taste the authentic Champaran & Ahuna heritage."
                backgroundImage={img("Mutton Handi.jpg")}
                ctaText="Order Online / Menu"
                ctaLink="/menu"
            />

            <main className={styles.mainWrapper}>
                {/* Intro Story Section */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <h2 className={styles.mainTitle}>Savor the Majestic Taste of Slow-Cooked Handi Mutton in Gorakhpur</h2>
                            <p className={styles.leadText}>
                                Picture this: A rustic earthen clay pot, sealed tight with fresh wheat dough, simmering gently over slow-burning embers for over four hours. As our chef cracks open the hard wheat seal, a cloud of rich, aromatic, spice-laden steam billows out, instantly filling the room with an aroma that makes your mouth water. 
                                That is the magic of the signature **Special Handi Mutton** at **Adalat Restaurant, Gorakhpur**.
                            </p>
                            <p className={styles.leadSubtext}>
                                Located near the beautiful **Ramgarh Taal Pool in Kunraghat**, we have perfected the art of cooking mutton the old-school way. Combining the legendary heritage of **Champaran (Ahuna) mutton** with rich Mughlai spices, we bring you a sensory experience where the meat is so tender it literally falls off the bone.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: Detailed Story + Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <h2 className={styles.sectionHeadingLeft}>The Earthen Secret: Earthen Clay-Pot Cooking</h2>
                                    <p>
                                        At Adalat, we believe that modern woks and pressure cookers can never replicate the soulful taste of a genuine clay handi. Clay is porous, allowing heat and moisture to circulate evenly. This slow-cooking method acts as a natural tenderizer, melting the mutton fat gently into a thick, luscious, and earthy gravy.
                                    </p>
                                    <p>
                                        We marinate succulent mutton cuts in a combination of heated raw mustard oil, whole garlic bulbs (a signature Champaran style touch), hand-ground coriander, cumin, black cardamom, and freshly crushed cinnamon. The handi is sealed with dough and left to cook undisturbed. By the time it reaches your table, it is a masterpiece.
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
                                            <span className={styles.statLbl}>Local Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Handi.jpg")}
                                        alt="Traditional slow-cooked Champaran style Handi Mutton in Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Comparison Table Section for AEO and GEO Optimization */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Clay Pot Handi Mutton vs. Kadhai Mutton: The Ultimate Showdown</h2>
                            <p className={styles.sectionSubtext}>
                                Why does clay-pot slow cooking win every single time? Let's look at the science and tradition behind the perfect bowl of mutton.
                            </p>
                            <div className={styles.tableWrapper}>
                                <table className={styles.comparisonTable}>
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Adalat Sealed Clay Pot Handi Mutton</th>
                                            <th>Standard Restaurant Kadhai Mutton</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={styles.tableHighlight}><strong>Cooking Vessel</strong></td>
                                            <td>Natural Porous Clay Pot (Mitti ki Handi)</td>
                                            <td>Metal Wok / Iron Kadhai</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tableHighlight}><strong>Cooking Time</strong></td>
                                            <td>4+ Hours of slow, gentle heat</td>
                                            <td>30-45 minutes on high gas flame</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tableHighlight}><strong>Moisture Retention</strong></td>
                                            <td>100% retained via wheat-dough seal (Dum)</td>
                                            <td>Escapes easily, requiring constant water additions</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tableHighlight}><strong>Meat Texture</strong></td>
                                            <td>Incredibly tender, melt-in-your-mouth bones</td>
                                            <td>Often chewy, fibrous, or tough</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tableHighlight}><strong>Flavor Accent</strong></td>
                                            <td>Deep earthy, smoky tone with infused marrow</td>
                                            <td>Standard fried spices, lacking soil-rich depth</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Famous - Grid */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>What Makes Our Handi Mutton Famous Across Gorakhpur?</h2>
                            <p className={styles.sectionSubtext}>
                                We don't believe in shortcuts. At Adalat Restaurant, cooking is a sacred ritual of patience, quality, and heritage.
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

                {/* Section 2: Perfect Pairing */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>The Perfect Culinary Companions</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Rogan Josh.jpg")}
                                        alt="Wholesome mutton dining spread at Adalat Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        Handi Mutton is an experience best shared. The heavy, aromatic gravy demands the right companions. Whether you love the tactile experience of tearing hot, buttery flatbreads or spooning fragrant rice, we have got you covered.
                                    </p>
                                    <p>
                                        Our guests' absolute favorite is pairing it with fresh, hot-off-the-tandoor **Laccha Paratha** or **Garlic Naan**. The buttery layers absorb the earthy gravy beautifully. For the purists, a plate of fragrant **Basmati Rice** perfectly highlights the rich, smoky flavors.
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

                {/* Interactive FAQ Section - Beautiful, Semantic, and AEO Optimized */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Frequently Asked Questions (FAQ)</h2>
                            <p className={styles.sectionSubtext}>
                                Got questions about Gorakhpur's favorite Handi Mutton? We have all the answers!
                            </p>
                            <div className={styles.faqContainer}>
                                <details className={styles.faqItem} open>
                                    <summary className={styles.faqQuestion}>
                                        <span>🏺 What makes Adalat's Handi Mutton so unique in Gorakhpur?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Unlike standard restaurants that prepare curry in metal pans and serve it in a clay dish, Adalat Restaurant does the **entire cooking process inside raw clay pots**. We seal the pot using fresh wheat flour dough and slow-cook it over a low charcoal flame for **more than 4 hours**. This locks in every drop of moisture and infuses the gravy with a rich, smoky, and earthy soil aroma.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🌶️ Do you serve Champaran-style (Ahuna) Mutton?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes! Our Special Handi Mutton is inspired by the iconic **Champaran and Ahuna mutton** styles. We use raw mustard oil, handpicked spices, and cook the mutton with **whole garlic bulbs** inside the sealed handi. It provides a rustic, spicy, and deep savory flavor profile that non-veg lovers absolutely adore.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🐑 How do you ensure the quality of mutton?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            We follow a strict fresh-only policy. We procure premium, **halal-certified fresh mutton** every single morning. We never use frozen meat or chemical tenderizers. The incredible tenderness of our mutton is purely a result of fresh cuts and 4+ hours of patient, slow clay-pot cooking.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>📍 Where is Adalat Restaurant located? Is parking available?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Adalat Restaurant is located at **Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur, UP 273008**. We are on the main Deoria Road, making us extremely easy to reach. We offer ample dedicated parking for both two-wheelers and four-wheelers, along with a spacious, warm family dining area.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🛵 Can I order Adalat Handi Mutton online in Gorakhpur?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, you can order our famous Handi Mutton online directly through our website or delivery partners! We pack our delivery orders securely in food-grade packaging so it reaches your home piping hot and full of flavor. Visit our menu page to place an order or call us directly!
                                        </p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* As Seen In Media — Trust Section */}
                <ScrollWrapper>
                    <MediaSection isLandingPage={true} />
                </ScrollWrapper>

                {/* CTA Section */}
                <ScrollWrapper>
                    <section className={styles.ctaSection}>
                        <div className="container">
                            <div className={styles.ctaContent}>
                                <h2 className={styles.ctaHeading}>Craving the Best Handi Mutton in Gorakhpur?</h2>
                                <p className={styles.ctaText}>
                                    Gather your friends and family and visit Adalat Restaurant today. Enjoy a rich feast of authentic clay-pot Handi Mutton, hot flatbreads, and unmatched hospitality near the beautiful Ramgarh Lake.
                                </p>
                                <div className={styles.ctaAddress}>
                                    <p>📍 Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur, UP 273008</p>
                                    <p>🕙 Open Daily: 10:00 AM – 12:00 AM (Midnight)</p>
                                    <p>📞 Phone: <a href="tel:+919936407733">+91 99364 07733</a></p>
                                </div>
                                <div className={styles.ctaButtons}>
                                    <Link href="/menu" className="btn btn-primary">Order / View Full Menu</Link>
                                    <Link href="/contact" className="btn">Get Driving Directions</Link>
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
