import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Non Veg Restaurant in Gorakhpur | Adalat Restaurant",
    description: "Craving authentic Mughlai & North Indian non-veg food? Adalat Restaurant is the best non veg restaurant in Gorakhpur, serving Handi Mutton, Butter Chicken & Biryani.",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-non-veg-restaurant-gorakhpur",
    },
    openGraph: {
        title: "Best Non Veg Restaurant in Gorakhpur | Adalat Restaurant",
        description: "Indulge in Gorakhpur's finest selection of non-vegetarian dishes including slow-cooked Handi specials, starters, and Mughlai classics at Adalat.",
        url: "https://adalatrestaurant.com/best-non-veg-restaurant-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        // TODO: replace GitHub raw image URL with self-hosted asset
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Adalat%20Special.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Non Veg Restaurant in Gorakhpur | Adalat Restaurant",
        description: "From buttery curries to authentic charcoal kebabs, explore the absolute best non-vegetarian menu in Gorakhpur at Adalat.",
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
    "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Adalat%20Special.jpg",
    "url": "https://adalatrestaurant.com/best-non-veg-restaurant-gorakhpur",
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
            "name": "Is the meat fresh, or do you use frozen stock?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We source fresh chicken and mutton every single morning — we never use frozen meat. This is core to how we keep every dish tender and flavorful."
            }
        },
        {
            "@type": "Question",
            "name": "Is your meat halal-certified?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we procure halal-certified meat for all our non-vegetarian dishes."
            }
        },
        {
            "@type": "Question",
            "name": "What's the most popular non-veg dish at Adalat?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Butter Chicken, Handi Mutton, and Galawati Kebab are among our most-loved dishes, alongside our signature dum biryani."
            }
        },
        {
            "@type": "Question",
            "name": "Do you deliver non-veg dishes across Gorakhpur?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer home delivery with food-grade, secure packaging to ensure your order arrives hot and fresh."
            }
        },
        {
            "@type": "Question",
            "name": "Do you serve both starters and main course non-veg options?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our menu covers everything from charcoal-grilled starters like Chicken Tikka and Seekh Kebab to rich main course curries like Butter Chicken, Rogan Josh, and Handi specialties."
            }
        }
    ]
};

const features = [
    { icon: "🍗", title: "Premium Cuts & Fresh Meat", desc: "We source our chicken and mutton fresh daily, strictly avoiding frozen items to ensure absolute tenderness and taste." },
    { icon: "🏺", title: "Authentic Earthen Pot Cooking", desc: "Our signature dishes are prepared slowly in traditional clay pots, capturing the rich, original rustic flavors of India." },
    { icon: "🌿", title: "Signature Spice Blends", desc: "Our chefs roast and grind whole spices in-house, creating aromatic dry-spice masalas that cannot be replicated." },
    { icon: "🧼", title: "Top-Tier Cleanliness", desc: "Hygiene is our highest priority. We follow international kitchen sanitation standards at all times." },
    { icon: "🍽️", title: "Elegant Fine Dining", desc: "A cozy, premium dining atmosphere perfect for food enthusiasts, families, and massive corporate gatherings." },
    { icon: "🚚", title: "Fast Home Delivery", desc: "Get your favorite non-veg delicacies delivered fresh, warm, and tightly sealed directly to your home." }
];

const bestSellers = [
    { icon: "🥣", name: "Butter Chicken", desc: "Tender roasted chicken tikka cooked in a velvety, rich tomato, butter, and cashew gravy." },
    { icon: "🍢", name: "Galawati Kebab", desc: "Lucknow-style melt-in-mouth minced mutton patties infused with exotic spices and pan-fried." },
    { icon: "🥘", name: "Mutton Rogan Josh", desc: "Classic Kashmiri style mutton curry cooked with fragrant spices, curd, and natural red chili color." }
];

export default function BestNonVegRestaurantGorakhpur() {
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
                title="Best Non Veg Restaurant in Gorakhpur"
                subtitle="Dine with us to experience the ultimate feast of rich Mughlai curries, juicy charcoal-grilled kebabs, and authentic biryanis."
                backgroundImage={img("Chicken Adalat Special.jpg")}
                ctaText="Explore Menu"
                ctaLink="/menu"
            />

            <main>
                {/* Intro Section */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                If you are a passionate foodie looking for the ultimate culinary feast, welcome to <strong>Adalat Restaurant</strong>. We are proudly recognized as the <strong>best non veg restaurant in Gorakhpur</strong>. Our establishment is built on a passion for serving authentic, rich, and mouth-watering non-vegetarian food. From slow-cooked curries in clay pots to sizzling starters cooked over hot charcoal, our menu is designed to satisfy every meat craving. Whether you love chicken, mutton, or spicy Mughlai delicacies, Adalat offers an unparalleled dining experience that keeps our customers returning for more.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: The Non-Veg Feast - Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>The Finest Non-Veg Dining Experience</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        What makes us the top destination for <strong>non veg food in Gorakhpur</strong>? It starts with our ingredients. We believe that great taste can only come from fresh, premium-quality ingredients. We buy fresh, high-quality meat every single morning, selecting only the finest cuts. Our chefs never use frozen meats, ensuring that every dish remains juicy, tender, and flavor-packed.
                                    </p>
                                    <p>
                                        Our recipes combine authentic culinary traditions with modern standards. We slow-cook our curries, allowing the spices to fully penetrate the meat. We roast and grind our dry-spice blends in-house, creating a rich taste profile. When you visit Adalat Restaurant, you aren't just eating a meal; you are experiencing a rich culinary heritage crafted with absolute dedication.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>Fresh</span>
                                            <span className={styles.statLbl}>Meat Daily</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>100%</span>
                                            <span className={styles.statLbl}>Natural Spices</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>20+</span>
                                            <span className={styles.statLbl}>Year Legacy</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Butter Chicken.jpg")}
                                        alt="Rich creamy Butter Chicken served at Adalat Restaurant in Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Why Choose Adalat */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Why Food Lovers Choose Adalat</h2>
                            <p className={styles.sectionSubtext}>
                                We combine culinary expertise, impeccable hygiene, and friendly service to create Gorakhpur's most loved non-vegetarian dining experience.
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

                {/* Section 2: Starters and Main Course - Image Left */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>From Sizzling Starters to Royal Main Courses</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Rogan Josh.jpg")}
                                        alt="Traditional Kashmiri Mutton Rogan Josh at Adalat Restaurant Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        Our kitchen serves a wide variety of dishes designed to satisfy any preference. To start your culinary journey, try our charcoal-grilled starters. Our <Link href="/best-chicken-restaurant-gorakhpur">chicken dishes in Gorakhpur</Link> feature delicious options like our spicy Chicken Tikka, succulent Tandoori Chicken, and herb-infused kababs.
                                    </p>
                                    <p>
                                        For the main course, our curry selection is unmatched. We serve everything from rich, creamy Butter Chicken to classic Kashmiri style Mutton Rogan Josh. As a premier <strong>mutton restaurant in Gorakhpur</strong>, we are famous for our slow-cooked mutton curries, which offer a deep, robust flavor that pairs beautifully with fresh butter naan or tandoori roti.
                                    </p>
                                    <p>
                                        If you want to experience our ultimate specialties, explore our signature slow-cooked clay pot curries on our <Link href="/famous-handi-meat-gorakhpur">famous handi meat in Gorakhpur</Link> page, or sample our layered rice dishes on our <Link href="/best-biryani-restaurant-gorakhpur">best biryani restaurant in Gorakhpur</Link> page.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 3: Ideal for Every Occasion - Image Right */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Enjoy a Perfect Dine-In with Family & Friends</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        At Adalat Restaurant, we believe that dining out is about more than just food — it is about making memories. Our spacious dining area, warm lighting, and beautiful decor provide the perfect setting for a relaxed meal. We are widely considered the <Link href="/best-family-restaurant-gorakhpur">best family restaurant in Gorakhpur</Link>, providing a welcoming atmosphere for children, seniors, and large groups alike.
                                    </p>
                                    <p>
                                        Our polite staff is always ready to recommend the perfect pairings or adjust spice levels to match your taste. Whether you are hosting a birthday party, celebrating a family occasion, or simply enjoying a weekend treat, Adalat makes every occasion special.
                                    </p>
                                    <p>
                                        If you prefer to dine at home, you can easily place an order online or via phone. We pack all our deliveries in premium, food-grade containers to ensure your dishes arrive fresh, hot, and delicious. Discover our full menu and history by visiting our <Link href="/about">About Us</Link> page.
                                    </p>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Mutton Galawati Kebab.jpg")}
                                        alt="Traditional pan-fried Mutton Galawati Kebabs at Adalat Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Best Sellers Section */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Our Non-Veg Bestsellers</h2>
                            <p className={styles.sectionSubtext}>
                                Unsure what to order first? Here are three legendary preparations that have become iconic favorites among food lovers in Gorakhpur.
                            </p>
                            <div className={styles.pairingGrid}>
                                {bestSellers.map((item, i) => (
                                    <div key={i} className={styles.pairingCard}>
                                        <div className={styles.pairingIcon}>{item.icon}</div>
                                        <h3 className={styles.pairingName}>{item.name}</h3>
                                        <p className={styles.pairingDesc}>{item.desc}</p>
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
                                Got questions about non-veg dining at Adalat? We have all the answers!
                            </p>
                            <div className={styles.faqContainer}>
                                <details className={styles.faqItem} open>
                                    <summary className={styles.faqQuestion}>
                                        <span>🥩 Is the meat fresh, or do you use frozen stock?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            We source fresh chicken and mutton every single morning — we never use frozen meat. This is core to how we keep every dish tender and flavorful.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>📜 Is your meat halal-certified?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we procure halal-certified meat for all our non-vegetarian dishes.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>⭐ What's the most popular non-veg dish at Adalat?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Our Butter Chicken, Handi Mutton, and Galawati Kebab are among our most-loved dishes, alongside our signature dum biryani.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🛵 Do you deliver non-veg dishes across Gorakhpur?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we offer home delivery with food-grade, secure packaging to ensure your order arrives hot and fresh.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🍽️ Do you serve both starters and main course non-veg options?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, our menu covers everything from charcoal-grilled starters like Chicken Tikka and Seekh Kebab to rich main course curries like Butter Chicken, Rogan Josh, and Handi specialties.
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
                                <h2 className={styles.ctaHeading}>Dine at the Best Non-Veg Restaurant in Gorakhpur!</h2>
                                <p className={styles.ctaText}>
                                    Treat yourself and your loved ones to a memorable non-veg feast at Adalat Restaurant today. Reserve a table for dine-in, stop by for takeout, or place a home delivery order.
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
