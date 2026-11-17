import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Reveal from "./Reveal";
import styles from "./BranchPage.module.css";
import { siteConfig, branchList, restaurantSchema, mapsLink, mapsEmbed, telHref, waLink } from "../lib/siteConfig";

const BranchPage = ({ id, heroImage, intro }) => {
    const branch = siteConfig.branches[id];
    const other = branchList.find((b) => b.id !== id);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...restaurantSchema(branch) }) }}
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
                            title={`Map of Adalat Restaurant ${branch.city}`}
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
