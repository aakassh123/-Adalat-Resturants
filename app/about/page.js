import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ScrollWrapper from "../components/ScrollWrapper";
import Link from "next/link";
import styles from "./about.module.css";

import { siteConfig } from "../lib/siteConfig";

export const metadata = {
    title: "About Adalat Restaurant | 20+ Years of Authentic Handi & Non-Veg Legacy in UP",
    description: "Discover the heritage of Adalat Restaurant. Over 20 years of master craftsmanship in slow-cooked Champaran Handi Mutton, Awadhi Dum Biryani, and North Indian non-veg dining across Gorakhpur and Lucknow.",
    keywords: [
        "About Adalat Restaurant",
        "Adalat Restaurant history",
        "best non veg restaurant in Gorakhpur",
        "best non veg restaurant in Lucknow",
        "authentic handi meat heritage UP",
        "Ramgarh Taal restaurant history",
    ],
    alternates: { canonical: `${siteConfig.url}/about` },
    openGraph: {
        title: "About Adalat Restaurant | Authentic Non-Veg Dining in UP",
        description: "Over 20 years of traditional woodfire claypot cooking in Gorakhpur & Lucknow.",
        url: `${siteConfig.url}/about`,
        siteName: siteConfig.name,
        type: "website",
        images: [{ url: `${siteConfig.url}/hero_about.webp`, alt: "Adalat Restaurant Heritage Story" }],
    },
};

export default function About() {
    return (
        <>
            <Navbar />
            <Hero
                title="About Adalat"
                subtitle="Built around traditional flavours, honest cooking, and recipes that have stood the test of time."
                backgroundImage="https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Adalat%20Specia;.jpg" // Unique Hero Image
            />
            <main>
                <ScrollWrapper>
                    <Section title="Roots of Tradition">
                        <div className={`container ${styles.content}`}>
                            <p>
                                Adalat is a North Indian non-vegetarian restaurant built around traditional flavours, honest cooking, and recipes that have stood the test of time. Based in Lucknow, Adalat is known for serving food that feels familiar, comforting, and deeply rooted in Indian culinary culture.
                            </p>
                            <p>
                                Our kitchen focuses on preparing non-vegetarian dishes the traditional way — with patience, balanced spices, and techniques that bring out depth in flavour rather than overpowering heat. This approach has helped Adalat earn its place among the best non-veg restaurants in Lucknow for diners who value authenticity.
                            </p>
                        </div>
                    </Section>
                </ScrollWrapper>

                <ScrollWrapper>
                    <Section title="Our Story" dark={true}>
                        <div className={`container ${styles.content}`}>
                            <p>
                                Adalat was created with a simple idea — to serve North Indian non-vegetarian food the way it is meant to be cooked and enjoyed. Instead of chasing trends, the focus has always been on preserving taste, consistency, and cooking methods that have been part of Indian kitchens for generations.
                            </p>
                            <p>
                                Over time, this commitment to quality and flavour helped Adalat connect with guests who were looking for reliable, well-cooked non-veg food in a comfortable restaurant setting. What began as a passion for traditional cooking gradually grew into a brand that is now present in multiple cities through franchise partners.
                            </p>
                        </div>
                    </Section>
                </ScrollWrapper>

                <ScrollWrapper>
                    <Section title="What Makes Adalat Different">
                        <div className={`container ${styles.content}`}>
                            <p>
                                What sets Adalat apart is its clear food identity. Our menu is designed around North Indian non-vegetarian cuisine, with special attention given to slow-cooked preparations and traditional techniques.
                            </p>
                            <p>
                                A key part of our identity is our handi-based cooking, including the much-loved <strong>Gorakhpur Special Handi Meat</strong>, which reflects regional influence and classic flavour profiles. While our menu includes a variety of dishes, every preparation follows the same philosophy — respect the recipe, balance the spices, and let the food speak for itself.
                            </p>
                            <p>
                                This consistency in taste and approach is why Adalat is often recommended by guests searching for authentic non-veg food in Lucknow.
                            </p>
                        </div>
                    </Section>
                </ScrollWrapper>

                <ScrollWrapper>
                    <Section title="Our Vision" dark={true}>
                        <div className="container text-center">
                            <p className={styles.visionText}>
                                Adalat aims to continue celebrating North Indian non-vegetarian cuisine by preserving traditional cooking methods and presenting them in a modern dining environment. As the brand grows, the goal remains unchanged — to serve food that feels authentic, satisfying, and true to its roots.
                            </p>
                            <p className={styles.visionText} style={{ marginTop: '20px' }}>
                                For anyone looking to experience classic flavours or explore partnership opportunities, Adalat stands as a restaurant that values tradition, quality, and consistency.
                            </p>

                            <div style={{ marginTop: '40px' }}>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>Ready to experience authentic North Indian non-veg food?</h3>
                                <div className={styles.buttonGroup}>
                                    <Link href="/contact" className="btn btn-primary">Visit Our Restaurant</Link>
                                    <Link href="/philosophy" className="btn">Explore Handi Philosophy</Link>
                                </div>
                            </div>
                        </div>
                    </Section>
                </ScrollWrapper>
            </main>
            <Footer />
        </>
    );
}
