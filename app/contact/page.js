import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ScrollWrapper from "../components/ScrollWrapper";
import Reveal from "../components/Reveal";
import styles from "./contact.module.css";
import FranchiseForm from "../components/FranchiseForm";
import { siteConfig, branchList, mapsLink, telHref, waLink } from "../lib/siteConfig";

export const metadata = {
    title: "Contact | Biryani, Handi Restaurant Gorakhpur India",
    description: "Get contact details, directions, and booking information. Conveniently located near Ramgarh Taal for easy access and quick visits.",
    keywords: "Adalat Restaurant contact, restaurant in Gorakhpur contact number, restaurant near Ramgarh Taal Gorakhpur, book table Gorakhpur",
    alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                title="Get In Touch With Adalat"
                subtitle="We’d love to hear from you."
                backgroundImage="/hero_contact.webp"
            />
            <main>
                <ScrollWrapper>
                    <Section title="Contact Details">
                        <div className="container text-center" style={{ maxWidth: '800px' }}>
                            <p className={styles.introText}>
                                Whether you’re planning a visit, have a question about our food, or want to explore a business opportunity, the Adalat team is here to help.
                            </p>
                        </div>

                        <div className={styles.contactGrid}>
                            {/* Branch cards: Lucknow, then Gorakhpur (Main Branch) */}
                            {[branchList[1], branchList[0]].map((b, i) => (
                                <Reveal key={b.id} delay={i * 0.1} className={styles.contactCard}>
                                    <div className={styles.iconWrapper}>📍</div>
                                    <h3>{b.label}</h3>
                                    {b.displayLines.map((line, idx) => (
                                        <p key={line}>{idx === 0 ? <strong>{line}</strong> : line}</p>
                                    ))}
                                    <p>
                                        <strong>Mob:</strong>{" "}
                                        {b.phones.map((n, idx) => (
                                            <span key={n}>
                                                <a className={styles.phoneLink} href={telHref(n)}>{n}</a>{idx < b.phones.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>
                                    <div className={styles.cardActions}>
                                        <a href={mapsLink(b)} target="_blank" rel="noopener noreferrer" className={styles.cardBtn}>Get Directions</a>
                                        <Link href={`/${b.id}`} className={styles.cardBtnGhost}>Branch Page</Link>
                                    </div>
                                </Reveal>
                            ))}

                            <Reveal delay={0.2} className={styles.contactCard}>
                                <div className={styles.iconWrapper}>📞</div>
                                <h3>Contact Details</h3>
                                <p><a className={styles.phoneLink} href={telHref(siteConfig.phone)}>{siteConfig.phoneDisplay}</a></p>
                                <p><a className={styles.phoneLink} href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                            </Reveal>

                            <Reveal delay={0.3} className={styles.contactCard}>
                                <div className={styles.iconWrapper}>⏰</div>
                                <h3>Opening Hours</h3>
                                <p>{siteConfig.hours.days}</p>
                                <p>{siteConfig.hours.display}</p>
                            </Reveal>

                            <Reveal delay={0.4} className={`${styles.contactCard} ${styles.whatsappCard}`}>
                                <div className={styles.iconWrapper}>💬</div>
                                <h3>Chat on WhatsApp</h3>
                                <p>For quick queries & info</p>
                                <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.cardBtn}>
                                    Chat Now
                                </a>
                            </Reveal>
                        </div>
                    </Section>
                </ScrollWrapper>

                <ScrollWrapper>
                    <Section title="Franchise Enquiries" dark={true} id="franchise">
                        <div className="container">
                            <div className={`text-center ${styles.franchiseContent}`}>
                                <p>
                                    Adalat is open to franchise opportunities across India. If you are interested in partnering with a growing North Indian non-vegetarian restaurant brand, we’d be happy to connect.
                                </p>
                                <div className={styles.franchiseContact}>
                                    <h3>For franchise-related enquiries:</h3>
                                    <p>Phone: {siteConfig.phoneDisplay}</p>
                                    <p>Email: {siteConfig.email}</p>
                                    <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>You can also reach out via WhatsApp for initial discussions.</p>
                                </div>
                            </div>

                            <FranchiseForm />

                            <div className="text-center" style={{ marginTop: '40px', color: '#666', fontStyle: 'italic' }}>
                                <p>At Adalat, we value every message and enquiry. Our team aims to respond promptly.</p>
                            </div>
                        </div>
                    </Section>
                </ScrollWrapper>
            </main>
            <Footer />
        </>
    );
}
