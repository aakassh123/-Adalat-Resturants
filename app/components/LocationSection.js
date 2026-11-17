import Link from 'next/link';
import { MapPin, Phone, Navigation, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import styles from './LocationSection.module.css';
import { branchList, mapsLink, telHref } from '../lib/siteConfig';

const LocationSection = () => (
    <section className={styles.section}>
        <div className="container">
            <div className={styles.header}>
                <Reveal as="span" className="eyebrow">Find Us</Reveal>
                <Reveal as="h2" className={styles.heading} delay={0.05}>Serving Guests in Lucknow and Beyond</Reveal>
                <Reveal as="p" className={styles.subheading} delay={0.1}>
                    Adalat currently serves food lovers in Lucknow and continues to grow through franchise
                    locations across different parts of the country. Every outlet follows the same core
                    approach — consistency in taste, quality, and experience.
                </Reveal>
            </div>

            <Reveal className={styles.card} y={50}>
                <div className={styles.iconWrapper}>
                    <MapPin size={32} className={styles.icon} />
                </div>
                <div className={styles.info}>
                    <h3 className={styles.city}>Lucknow & Gorakhpur, UP</h3>
                    <p className={styles.details}>Visit our restaurants in Lucknow (Ashiyana) & Gorakhpur (Kunraghat) for authentic North Indian flavours</p>
                </div>
            </Reveal>

            <div className={styles.branches}>
                {branchList.map((b, i) => (
                    <Reveal key={b.id} delay={i * 0.12} className={styles.branch}>
                        <h3 className={styles.branchName}>{b.label}</h3>
                        <p className={styles.branchAddr}>{b.displayLines.join(' ')}</p>
                        <div className={styles.branchActions}>
                            <a href={mapsLink(b)} target="_blank" rel="noopener noreferrer" className={styles.pill}><Navigation size={15} /> Directions</a>
                            <a href={telHref(b.phones[0])} className={styles.pill}><Phone size={15} /> Call</a>
                            <Link href={`/${b.id}`} className={styles.pillGhost}>Details <ArrowRight size={15} /></Link>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default LocationSection;
