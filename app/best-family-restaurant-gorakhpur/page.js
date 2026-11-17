import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Best Family Restaurant in Gorakhpur | Adalat Restaurant",
    description: "Looking for the best family restaurant in Gorakhpur? Adalat Restaurant offers comfortable seating, a welcoming ambiance, and delicious vegetarian & non-vegetarian food.",
    alternates: {
        canonical: "https://adalatrestaurant.com/best-family-restaurant-gorakhpur",
    },
    openGraph: {
        title: "Best Family Restaurant in Gorakhpur | Adalat Restaurant",
        description: "Enjoy a memorable dining experience with your family at Adalat Restaurant in Gorakhpur. Delicious food, premium hospitality, and comfortable seating.",
        url: "https://adalatrestaurant.com/best-family-restaurant-gorakhpur",
        siteName: "Adalat Restaurant",
        type: "website",
        // TODO: replace GitHub raw image URL with self-hosted asset
        images: [{ url: "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Adalat%20Special.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Family Restaurant in Gorakhpur | Adalat Restaurant",
        description: "With comfortable seating, warm hospitality, and a rich multi-cuisine menu, Adalat Restaurant is Gorakhpur's top family dining spot.",
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
    "url": "https://adalatrestaurant.com/best-family-restaurant-gorakhpur",
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
            "name": "Is Adalat Restaurant suitable for dining with young kids?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. Our dining area is spacious, kid-friendly, and designed with comfortable seating for families of all sizes. Our staff is happy to help with milder spice options for children too."
            }
        },
        {
            "@type": "Question",
            "name": "Do you take reservations for family gatherings or birthdays?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we do. You can call us at +91 99364 07733 to reserve a table or discuss a custom party menu for birthdays, anniversaries, or family get-togethers."
            }
        },
        {
            "@type": "Question",
            "name": "Is there parking available at the restaurant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer ample parking for both two-wheelers and four-wheelers, making it easy and convenient for families to visit."
            }
        },
        {
            "@type": "Question",
            "name": "What are your timings for family dinners?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We're open daily from 10:00 AM to 12:00 AM, so you can plan a relaxed family lunch or a late dinner with equal ease."
            }
        },
        {
            "@type": "Question",
            "name": "Can you accommodate large family groups or get-togethers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our spacious dining hall with large tables is well suited for bigger groups. For larger events, we recommend calling ahead so we can prepare accordingly."
            }
        }
    ]
};

const features = [
    { icon: "👨‍👩‍👧‍👦", title: "Spacious Family Seating", desc: "Our dining hall features large, comfortable tables designed to accommodate families of all sizes easily." },
    { icon: "🧸", title: "Warm & Welcoming Ambience", desc: "We provide a peaceful, kid-friendly, and elder-friendly environment with cozy lighting and clean seating." },
    { icon: "🥗", title: "Multi-Cuisine Variety", desc: "Our menu features a wide selection of vegetarian and non-vegetarian dishes, ensuring options for everyone." },
    { icon: "✨", title: "Impeccable Hygiene Standards", desc: "We maintain high standards of cleanliness in our dining area and kitchen, ensuring a safe experience." },
    { icon: "🤝", title: "Polite & Courteous Service", desc: "Our experienced service staff is dedicated to ensuring your family feels welcome and cared for." },
    { icon: "🎉", title: "Hosting & Event Capabilities", desc: "We host birthday parties, family anniversaries, and get-togethers, providing custom menu packages." }
];

const familyCombos = [
    { icon: "🍲", name: "Handi Special Combo", desc: "Our signature Handi Chicken or Mutton served with butter naans, rice, and fresh salad." },
    { icon: "🍱", name: "Butter Chicken Combo", desc: "Rich Butter Chicken served with soft tandoori rotis, fragrant basmati rice, and raita." },
    { icon: "🥬", name: "Vegetarian Platter Combo", desc: "Paneer Kolhapuri, Matar Paneer, and Hara Bhara Kebab served with fresh tandoori breads." }
];

export default function BestFamilyRestaurantGorakhpur() {
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
                title="Best Family Restaurant in Gorakhpur"
                subtitle="Gather your loved ones and enjoy a memorable dining experience with delicious food and premium hospitality."
                backgroundImage={img("Chicken Adalat Special.jpg")}
                ctaText="Dine With Us"
                ctaLink="/contact"
            />

            <main>
                {/* Intro Section */}
                <ScrollWrapper>
                    <section className={styles.introSection}>
                        <div className="container">
                            <p className={styles.leadText}>
                                Welcome to <strong>Adalat Restaurant</strong>, proud to be recognized as the <strong>best family restaurant in Gorakhpur</strong>. We believe that sharing a meal is one of the most wonderful ways to connect with the people who matter most. Our establishment is designed to provide a comfortable, welcoming, and elegant dining environment where families can gather, relax, and enjoy delicious, high-quality food. With a rich selection of vegetarian and non-vegetarian dishes, exceptional service, and clean surroundings, we are committed to making every family meal a special occasion.
                            </p>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 1: Family Dine-In Experience - Image Right */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>A Welcoming Space for Every Generation</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        What makes Adalat the top choice for <strong>family dining in Gorakhpur</strong>? It begins with our welcoming environment. We understand that dining out with children, parents, and grandparents requires a comfortable space, polite service, and a varied menu. Our dining area is spacious and features large tables that accommodate families of all sizes.
                                    </p>
                                    <p>
                                        We maintain a warm, peaceful ambiance with soft lighting and comfortable seating. Our service staff is trained to be attentive and polite, assisting you with custom spice levels, recommending dishes, and ensuring a pleasant meal. At Adalat Restaurant, we combine excellent food with genuine hospitality to create a memorable experience.
                                    </p>
                                    <div className={styles.statRow}>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>Kid</span>
                                            <span className={styles.statLbl}>Friendly Env</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>100%</span>
                                            <span className={styles.statLbl}>Hygiene Check</span>
                                        </div>
                                        <div className={styles.statItem}>
                                            <span className={styles.statNum}>4.7★</span>
                                            <span className={styles.statLbl}>User Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Chicken Handi Combo.jpg")}
                                        alt="A satisfying family meal combo featuring Handi Chicken at Adalat Gorakhpur"
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
                            <h2 className={styles.sectionHeading}>Why We Are Gorakhpur's Top Family Spot</h2>
                            <p className={styles.sectionSubtext}>
                                From spacious seating options to a varied multi-cuisine menu, we ensure every generation of your family enjoys a wonderful dining experience.
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

                {/* Section 2: Diverse Menu for Everyone - Image Left */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Something for Everyone: Our Varied Menu</h2>
                            <div className={styles.splitLayout}>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Matar Paneer.jpg")}
                                        alt="Delicious Matar Paneer served as a vegetarian option at Adalat Restaurant"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.splitText}>
                                    <p>
                                        A great family meal requires a menu that has something for everyone. Our kitchen serves a wide selection of dishes, from rich non-vegetarian classics to delicious vegetarian options. For the non-veg lovers in the family, we offer slow-cooked clay pot specialties like our <Link href="/famous-handi-meat-gorakhpur">famous handi meat in Gorakhpur</Link> and our aromatic <Link href="/best-biryani-restaurant-gorakhpur">best biryani restaurant in Gorakhpur</Link>.
                                    </p>
                                    <p>
                                        For the vegetarians, we offer a variety of delicious North Indian dishes, including Matar Paneer, Paneer Kolhapuri, and crispy Hara Bhara Kebabs. Every dish is prepared with fresh ingredients and authentic spices, ensuring excellent quality and flavor.
                                    </p>
                                    <p>
                                        If you want to view our full menu or check out our general non-veg offerings, visit our <Link href="/menu">Food Menu</Link> page and read our guide on the <Link href="/best-non-veg-restaurant-gorakhpur">best non veg restaurant in Gorakhpur</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Section 3: Celebrations and Gatherings - Image Right */}
                <ScrollWrapper>
                    <section className={styles.section}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Perfect for Celebrations and Special Occasions</h2>
                            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
                                <div className={styles.splitText}>
                                    <p>
                                        At Adalat, we enjoy hosting your celebrations. Whether you are celebrating a birthday, a family anniversary, a promotion, or simply enjoying a weekend dinner together, we provide the perfect venue. We offer custom party menu packages, allowing you to select the ideal combinations of starters, main courses, and desserts.
                                    </p>
                                    <p>
                                        We are committed to providing high standards of cleanliness, excellent food, and polite hospitality, ensuring a memorable experience for your guests. To see pictures of our seating and dishes, browse our <Link href="/gallery">Gallery</Link> page.
                                    </p>
                                    <p>
                                        If you prefer to dine at home, we offer fast delivery services. We pack all our delivery orders in premium, spill-proof containers to ensure they arrive fresh, warm, and ready to enjoy. Learn more about our story on our <Link href="/about">About Us</Link> page.
                                    </p>
                                </div>
                                <div className={styles.splitImage}>
                                    <img
                                        src={img("Hara Bhara Kebab.jpg")}
                                        alt="Delicious vegetarian starter Hara Bhara Kebab served at Adalat Gorakhpur"
                                        className={styles.contentImage}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollWrapper>

                {/* Family Combos Section */}
                <ScrollWrapper>
                    <section className={`${styles.section} ${styles.darkSection}`}>
                        <div className="container">
                            <h2 className={styles.sectionHeading}>Our Bestselling Family Combos</h2>
                            <p className={styles.sectionSubtext}>
                                Designed to feed groups easily, our bestselling family combos offer a balanced mix of our signature starters, curries, and sides.
                            </p>
                            <div className={styles.pairingGrid}>
                                {familyCombos.map((combo, i) => (
                                    <div key={i} className={styles.pairingCard}>
                                        <div className={styles.pairingIcon}>{combo.icon}</div>
                                        <h3 className={combo.pairingName}>{combo.name}</h3>
                                        <p className={styles.pairingDesc}>{combo.desc}</p>
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
                                Got questions about dining with family at Adalat? We have all the answers!
                            </p>
                            <div className={styles.faqContainer}>
                                <details className={styles.faqItem} open>
                                    <summary className={styles.faqQuestion}>
                                        <span>👨‍👩‍👧‍👦 Is Adalat Restaurant suitable for dining with young kids?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, absolutely. Our dining area is spacious, kid-friendly, and designed with comfortable seating for families of all sizes. Our staff is happy to help with milder spice options for children too.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>📅 Do you take reservations for family gatherings or birthdays?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we do. You can call us at +91 99364 07733 to reserve a table or discuss a custom party menu for birthdays, anniversaries, or family get-togethers.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🚗 Is there parking available at the restaurant?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, we offer ample parking for both two-wheelers and four-wheelers, making it easy and convenient for families to visit.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>🕙 What are your timings for family dinners?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            We're open daily from 10:00 AM to 12:00 AM, so you can plan a relaxed family lunch or a late dinner with equal ease.
                                        </p>
                                    </div>
                                </details>

                                <details className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>👥 Can you accommodate large family groups or get-togethers?</span>
                                        <span className={styles.faqIcon}></span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>
                                            Yes, our spacious dining hall with large tables is well suited for bigger groups. For larger events, we recommend calling ahead so we can prepare accordingly.
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
                                <h2 className={styles.ctaHeading}>Dine with Your Family at Adalat Today!</h2>
                                <p className={styles.ctaText}>
                                    Ready to enjoy a delicious multi-cuisine meal with your family? Visit Adalat Restaurant today to experience excellent food and warm hospitality. You can also call us to reserve a table.
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
