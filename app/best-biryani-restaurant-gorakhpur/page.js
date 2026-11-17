import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Biryani Restaurant in Gorakhpur | Adalat Restaurant",
    description: "Looking for the best biryani restaurant in Gorakhpur? Adalat Restaurant serves authentic Mughlai chicken & mutton dum biryani with long-grain basmati rice and traditional spices.",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-biryani-restaurant-gorakhpur",
    },
    openGraph: {
        title: "Best Biryani Restaurant in Gorakhpur | Adalat Restaurant",
        description: "Experience the rich Mughlai flavor of authentic Dum Biryani at Adalat Restaurant, Gorakhpur's top-rated spot for food lovers.",
        url: "https://adalatrestaurant.com/best-biryani-restaurant-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        // TODO: replace GitHub raw image URL with self-hosted asset
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Biryani.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Biryani Restaurant in Gorakhpur | Adalat Restaurant",
        description: "Enjoy authentic Mughlai Dum Biryani made with long-grain basmati rice and premium spices at Adalat Restaurant.",
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
    "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Biryani.jpg",
    "url": "https://adalatrestaurant.com/best-biryani-restaurant-gorakhpur",
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
            "name": "What makes your biryani different from regular restaurant biryani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our biryani is cooked in the traditional dum-pukht style — layered rice and meat slow-cooked in a sealed clay pot — instead of mixing pre-cooked rice and curry. This locks in the aroma and keeps the rice light and fluffy instead of mushy."
            }
        },
        {
            "@type": "Question",
            "name": "Do you have a vegetarian biryani option?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our specialty is our chicken and mutton dum biryani, prepared with the same traditional technique. For vegetarian options, do call ahead or check our full menu page for current availability."
            }
        },
        {
            "@type": "Question",
            "name": "How spicy is your biryani?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our biryani is rich and flavorful but balanced, not overpoweringly hot. If you'd like it milder or spicier, just let our staff know while ordering."
            }
        },
        {
            "@type": "Question",
            "name": "Do you deliver biryani, and how is it packed?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer fast home delivery. Our biryani is packed in spill-proof, aroma-locking containers so it reaches you hot, fresh, and just as flavorful as dine-in."
            }
        },
        {
            "@type": "Question",
            "name": "Can I order biryani in bulk for an event?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we cater bulk biryani orders for parties and events. Call us in advance at +91 99364 07733 to discuss quantity and timing."
            }
        }
    ]
};

const features = [
    { icon: "🌾", title: "Premium Basmati Rice", desc: "We use aged, long-grain basmati rice that offers a perfect texture, fragrance, and individual grains in every single bite." },
    { icon: "🏺", title: "Traditional Dum Style", desc: "Our biryanis are slow-cooked using the traditional dum-pukht technique, sealing the pot with dough to lock in the aroma." },
    { icon: "🍗", title: "Juicy & Fresh Meat", desc: "We select the highest quality chicken and mutton daily, ensuring the meat is incredibly tender and fully marinated." },
    { icon: "🌱", title: "Natural Aromatic Spices", desc: "No artificial colors or chemical flavorings. We use hand-ground spices like cardamom, saffron, mace, and nutmeg." },
    { icon: "👨‍🍳", title: "Generations of Expertise", desc: "Our head chefs have honed the art of Mughlai cuisine over decades, ensuring unmatched taste and absolute consistency." },
    { icon: "✨", title: "Hygienic Standards", desc: "We prepare all dishes in a pristine, state-of-the-art kitchen, adhering to the highest sanitation regulations." }
];

const pairings = [
    { icon: "🥣", name: "Spicy Salan", desc: "A peanut and sesame-based gravy that adds a tangy, rich element to the rice." },
    { icon: "🥗", name: "Chilled Mint Raita", desc: "Cooling yogurt mixed with fresh coriander and mint leaves, perfectly balancing the spices." },
    { icon: "🧅", name: "Laccha Onion Salad", desc: "Crisp sliced onions with fresh lemon juice and a touch of chat masala for a zesty crunch." }
];

export default function BestBiryaniRestaurantGorakhpur() {
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
                title="Best Biryani Restaurant in Gorakhpur"
                subtitle="Savor the taste of authentic Mughlai Dum Biryani, cooked with long-grain basmati rice, aromatic spices, and tender meat."
                backgroundImage={img("Chicken Biryani.jpg")}
                ctaText="View Our Menu"
                ctaLink="/menu"
            />

            <main>
                {/* Intro Section */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                Welcome to <strong>Adalat Restaurant</strong>, widely recognized as the <strong>best biryani restaurant in Gorakhpur</strong>. If you are a true biryani enthusiast searching for authentic flavor, rich Mughlai heritage, and an unforgettable dining experience, you have landed in the perfect place. We take immense pride in serving the most delicious, aromatic, and perfectly cooked biryani in town. By combining age-old culinary techniques with premium ingredients, we have created a signature taste that has won the hearts of food lovers throughout the region.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: The Biryani Legacy - Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>The Art of Traditional Mughlai Dum Biryani</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        What makes our biryani stands out from other restaurants? It lies in our commitment to the traditional <strong>dum-pukht</strong> style of cooking. Unlike standard restaurants that mix pre-cooked rice and curry at the last minute, our chefs prepare biryani the way it was meant to be made. We slow-cook layers of partially boiled basmati rice, marinated tender meat, and aromatic spices in a heavy-bottomed pot. The pot is sealed tightly with fresh wheat dough, allowing the ingredients to cook slowly in their own juices.
                                    </p>
                                    <p>
                                        This delicate process ensures that the steam cannot escape, forcing the rich flavours of spices, saffron, and ghee deep into every grain of rice and piece of chicken or mutton. The result is a highly aromatic dish where the rice remains light, fluffy, and separate, while the meat becomes so tender it falls off the bone. It is this dedication to authenticity that makes Adalat the ultimate destination for the <strong>best biryani in Gorakhpur</strong>.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>100%</span>
                                            <span className={styles.statLbl}>Authentic Dum</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>Aged</span>
                                            <span className={styles.statLbl}>Basmati Rice</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.8★</span>
                                            <span className={styles.statLbl}>Average Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Biryani.jpg")}
                                        alt="Aromatic Mutton Dum Biryani served at Adalat Restaurant in Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Famous Section */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why We Are the Best Biryani Spot</h2>
                            <p className={styles.sectionSubtext}>
                                From sourcing premium long-grain rice to slow-cooking every pot with extreme care, we ensure our food sets a new benchmark for quality in Gorakhpur.
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

                {/* Section 2: Explore Our Biryani Menu - Image Left */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>A Culinary Journey Through Our Special Menu</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Tikka Boneless.jpg")}
                                        alt="Chicken Tikka Starter to pair with Biryani at Adalat Restaurant"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        Our menu caters to every meat lover in Gorakhpur. Our absolute bestseller, the <strong>chicken biryani in Gorakhpur</strong>, features layers of juicy marinated chicken cooked with a unique spice blend, caramelized onions, and premium saffron. The spice levels are perfectly balanced, making it rich and flavorful without being overwhelmingly hot.
                                    </p>
                                    <p>
                                        For mutton aficionados, our <strong>mutton biryani in Gorakhpur</strong> is a masterpiece. We cook selected cuts of tender mutton with rich Mughlai spices, giving the rice a deep, savory meat flavor that biryani purists absolutely adore.
                                    </p>
                                    <p>
                                        Before diving into the main course, we highly recommend trying our tandoori starters. Pairing our biryani with succulent charcoal-grilled kababs like our famous <Link href="/best-chicken-restaurant-gorakhpur">Chicken Tikka</Link> or <Link href="/best-handi-mutton-gorakhpur">Mutton Galawati</Link> creates the ultimate feast. To explore all our menu offerings, check out our full <Link href="/menu">Food Menu</Link> page.
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
                            <h2 className={styles.sectionHeading}>More Than Just Great Food: A Family Experience</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        At Adalat, we believe that enjoying the best food is as much about the environment as it is about the taste. As a premier <Link href="/best-family-restaurant-gorakhpur">family restaurant in Gorakhpur</Link>, we provide a warm, comfortable, and beautifully designed dine-in space where you can share a meal with your loved ones. Our clean and spacious seating is perfect for hosting family gatherings, celebrating birthdays, or enjoying a cozy weekend dinner.
                                    </p>
                                    <p>
                                        If you prefer to relish our delicacies from the comfort of your home, we also offer lightning-fast delivery and takeout services. We pack our biryanis in special spill-proof, aroma-locking containers to ensure they arrive at your doorstep steaming hot, fresh, and bursting with flavor. 
                                    </p>
                                    <p>
                                        If you want to try other delicious non-veg specialties like our slow-cooked handi curries, do check out our dedicated guides on the <Link href="/best-non-veg-restaurant-gorakhpur">best non veg restaurant in Gorakhpur</Link> and our legendary <Link href="/famous-handi-meat-gorakhpur">famous handi meat in Gorakhpur</Link>.
                                    </p>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Seekh Kebab.jpg")}
                                        alt="Adalat Restaurant dine-in side dishes and kababs in Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Pairing Section */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>The Perfect Accompaniments</h2>
                            <p className={styles.sectionSubtext}>
                                No biryani is complete without the right side dishes. We serve our plates with signature condiments that enhance the overall culinary experience.
                            </p>
                            <div className={styles.pairingGrid}>
                                {pairings.map((p, i) => (
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
                                Got questions about the best biryani in Gorakhpur? We have all the answers!
                            </p>
                            <div className={styles.faqContainer}>
                                <details className={styles.faqItem} open>
                                    <summary className={styles.faqQuestion}>
                                        <span>🌾 What makes your biryani different from regular restaurant biryani?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Our biryani is cooked in the traditional dum-pukht style — layered rice and meat slow-cooked in a sealed clay pot — instead of mixing pre-cooked rice and curry. This locks in the aroma and keeps the rice light and fluffy instead of mushy.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🥬 Do you have a vegetarian biryani option?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Our specialty is our chicken and mutton dum biryani, prepared with the same traditional technique. For vegetarian options, do call ahead or check our full menu page for current availability.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🌶️ How spicy is your biryani?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Our biryani is rich and flavorful but balanced, not overpoweringly hot. If you'd like it milder or spicier, just let our staff know while ordering.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>📦 Do you deliver biryani, and how is it packed?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we offer fast home delivery. Our biryani is packed in spill-proof, aroma-locking containers so it reaches you hot, fresh, and just as flavorful as dine-in.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🎉 Can I order biryani in bulk for an event?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we cater bulk biryani orders for parties and events. Call us in advance at +91 99364 07733 to discuss quantity and timing.
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
                                <h2 className={styles.ctaHeading}>Visit Adalat Restaurant Today!</h2>
                                <p className={styles.ctaText}>
                                    Ready to taste the most flavorful and authentic Mughlai Dum Biryani in Gorakhpur? Bring your friends and family to Adalat Restaurant today, or call us to reserve a table or place a home delivery order.
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
