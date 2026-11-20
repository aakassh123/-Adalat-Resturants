import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Reveal from "./Reveal";
import styles from "./BranchPage.module.css";
import { siteConfig, branchList, restaurantSchema, mapsLink, mapsEmbed, telHref, waLink, fullAddress } from "../lib/siteConfig";

const BranchPage = ({ id, heroImage, intro }) => {
    const branch = siteConfig.branches[id];
    const other = branchList.find((b) => b.id !== id);

    const branchFaq = {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/${branch.id}#faq`,
        mainEntity: [
            {
                "@type": "Question",
                name: `What is the address and contact number of Adalat Restaurant in ${branch.city}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Adalat Restaurant in ${branch.city} is located at ${fullAddress(branch)}. You can call or WhatsApp our branch directly at ${branch.phones.map((p) => `+91 ${p}`).join(', ')}.`,
                },
            },
            {
                "@type": "Question",
                name: `What are the opening hours for Adalat Restaurant ${branch.city}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Adalat Restaurant in ${branch.city} is open daily (Monday to Sunday) from ${siteConfig.hours.display} for dine-in, takeaway, and delivery.`,
                },
            },
            {
                "@type": "Question",
                name: `What are the signature dishes at Adalat Restaurant in ${branch.city}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Our signature specialities include Gorakhpur Special Handi Meat, Champaran Handi Chicken, Awadhi Mutton Dum Biryani, and Charcoal Roasted Tandoori Chicken.`,
                },
            },
            {
                "@type": "Question",
                name: `Does Adalat Restaurant ${branch.city} provide home delivery and table reservations?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes, table bookings and home delivery are available across ${branch.city}. Simply call or message on WhatsApp to reserve or order.`,
                },
            },
        ],
    };

    const branchJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            restaurantSchema(branch),
            branchFaq,
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: siteConfig.url,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: `Adalat ${branch.city}`,
                        item: `${siteConfig.url}/${branch.id}`,
                    },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(branchJsonLd) }}
            />
            <Navbar />
            <Hero
                title={`Adalat Restaurant ${branch.city}`}
                subtitle={intro}
                backgroundImage={heroImage}
                ctaText="View Our Menu"
                ctaLink="/menu"
            />
            <main className={styles.main}>
                <div className={`container ${styles.grid}`}>
                    <Reveal className={styles.info}>
                        <span className="eyebrow">{branch.label}</span>
                        <h2 className={styles.title}>Visit us in {branch.city}</h2>

                        <div className={styles.row}>
                            <MapPin size={20} />
                            <div>
                                {branch.displayLines.map((l) => <p key={l}>{l}</p>)}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <Phone size={20} />
                            <div>
                                {branch.phones.map((n) => <p key={n}><a href={telHref(n)}>+91 {n}</a></p>)}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <Clock size={20} />
                            <div><p>{siteConfig.hours.days}</p><p>{siteConfig.hours.display}</p></div>
                        </div>

                        <div className={styles.actions}>
                            <a href={mapsLink(branch)} target="_blank" rel="noopener noreferrer" className={styles.primary}><Navigation size={16} /> Get Directions</a>
                            <a href={telHref(branch.phones[0])} className={styles.secondary}><Phone size={16} /> Call</a>
                            <a href={waLink(`Hello Adalat ${branch.city}, I would like to reserve a table.`)} target="_blank" rel="noopener noreferrer" className={styles.secondary}><MessageCircle size={16} /> WhatsApp</a>
                        </div>
                    </Reveal>

                    <Reveal className={styles.mapWrap} delay={0.12}>
                        <iframe
                            title={`Map location of Adalat Restaurant in ${branch.city}`}
                            src={mapsEmbed(branch)}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            className={styles.map}
                        />
                    </Reveal>
                </div>

                <div className={`container ${styles.other}`}>
                    <Link href={`/${other.id}`} className={styles.otherLink}>
                        Also visit our {other.city} branch <ArrowRight size={18} />
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BranchPage;
