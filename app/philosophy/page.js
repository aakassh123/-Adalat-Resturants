import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ScrollWrapper from "../components/ScrollWrapper";
import SteamEffect from "../components/SteamEffect";
import styles from "./philosophy.module.css";
import Image from 'next/image';

import { siteConfig } from "../lib/siteConfig";

export const metadata = {
    title: "Our Handi Philosophy | 100% Earthen Clay Pot Woodfire Cooking | Adalat",
    description: "Discover the authentic woodfire cooking philosophy of Adalat Restaurant. Slow-simmering Gorakhpur Special Handi Meat in dough-sealed clay pots over embers for deep rustic flavour and melting tenderness.",
    keywords: [
        "Handi cooking philosophy",
        "Mitti ki Handi Gorakhpur",
        "Champaran mutton cooking technique",
        "woodfire claypot cooking UP",
        "authentic Ahuna meat process",
        "Adalat Restaurant cooking tradition",
    ],
    alternates: { canonical: `${siteConfig.url}/philosophy` },
    openGraph: {
        title: "Our Handi Philosophy | Traditional Clay Pot Non-Veg Craft | Adalat",
        description: "The secret behind Adalat's legendary slow-cooked Handi Meat and chicken in Gorakhpur & Lucknow.",
        url: `${siteConfig.url}/philosophy`,
        siteName: siteConfig.name,
        type: "website",
        images: [{ url: `${siteConfig.url}/hero_philosophy_new.webp`, alt: "Traditional Handi Cooking Process" }],
    },
};

export default function Philosophy() {
    return (
        <>
            <Navbar />
            <Hero
                title="Our Handi Philosophy"
                subtitle="Traditional Cooking That Defines the Best Non-Veg Experience"
                backgroundImage="/hero_philosophy_new.webp"
            />
            <main>
                {/* Our Speciality Section */}
                {/* Custom Styled Philosophy Section */}
                <section className={styles.section}>
                    <div className="container">
                        <div className={styles.headingWrapper}>
                            <h2 className={styles.mainHeading}>
                                Gorakhpur Special Handi Meat & <br />
                                Signature Handi Dishes
                            </h2>
                            <div className={styles.separator}>
                                <span className={styles.dot}></span>
                                <div className={styles.line}></div>
                                <span className={styles.dot}></span>
                            </div>
                        </div>

                        <div className={styles.splitLayout}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/gallery/mutton-handi.webp"
                                    alt="Gorakhpur Special Handi Meat"
                                    width={600}
                                    height={400}
                                    className={styles.featureImage}
                                />
                                <SteamEffect intensity="high" />
                            </div>
                            <div className={styles.textContent}>
                                <p className={styles.text}>
                                    Adalat is known among food lovers as one of the best non-veg restaurants in Lucknow, especially for its traditional handi preparations. At the heart of this reputation is our <span className={styles.highlight}>Gorakhpur Special Handi Meat</span>, a dish inspired by the bold and rustic flavours of Eastern Uttar Pradesh.
                                </p>
                                <p className={styles.text}>
                                    This speciality is slow-cooked using the traditional handi cooking method, allowing spices, meat, and gravy to develop deep flavour over time. The result is tender meat, rich texture, and a taste that feels authentic and satisfying.
                                </p>
                                <p className={styles.text}>
                                    Along with our Gorakhpur special, Adalat also serves handi chicken and handi mutton, making it a preferred destination for guests searching for authentic North Indian non-veg food in Lucknow. These dishes are especially popular among diners who value traditional recipes and comforting, well-balanced flavours.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Handi Philosophy Section */}
                <ScrollWrapper>
                    <Section>
                        <div className={styles.headingWrapper}>
                            <h2 className={styles.mainHeading}>
                                The Philosophy of Slow Cooking
                            </h2>
                            <div className={styles.separator}>
                                <span className={styles.dot}></span>
                                <div className={styles.line}></div>
                                <span className={styles.dot}></span>
                            </div>
                        </div>
                        <div className={`container ${styles.content}`}>
                            <div className={styles.philosophyBlock}>
                                <h3>Patience, Precision, Consistency</h3>
                                <p>
                                    Handi cooking is one of the oldest and most respected methods in Indian cuisine. Cooking food slowly in a sealed handi helps retain natural juices, enhances aroma, and allows spices to mature properly. This philosophy shapes how Adalat prepares its signature dishes.
                                </p>
                                <p>
                                    As a restaurant often recommended as one of the best non-veg restaurants in Lucknow, Adalat believes that great food cannot be rushed. Our handi preparations focus on patience, precision, and consistency, ensuring that every serving delivers the same depth of flavour.
                                </p>
                                <p>
                                    While our menu includes a wide range of North Indian non-vegetarian dishes, the handi philosophy represents our commitment to authenticity and quality. It reflects our respect for regional cooking traditions and our dedication to serving food that feels genuinely Indian, rich in taste, and memorable.
                                </p>
                            </div>
                        </div>
                    </Section>
                </ScrollWrapper>
            </main>
            <Footer />
        </>
    );
}
