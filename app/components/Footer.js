import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import styles from './Footer.module.css';
import { siteConfig, telHref } from '../lib/siteConfig';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.column} ${styles.brandCol}`}>
                    <Image
                        src={siteConfig.logo}
                        alt="Adalat"
                        width={200}
                        height={80}
                        alt="Adalat Restaurant - Authentic North Indian Flavours"
                        width={220}
                        height={100}
                        className={styles.logo}
                    />
                    <p className={styles.navText}>
                        Serving authentic North Indian flavors in Lucknow & Gorakhpur. Experience the rich heritage of traditional Handi cooking.
                    </p>
                    <div className={styles.socials}>
                        <a href={siteConfig.social.facebook} className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="Adalat on Facebook"><Facebook size={18} /></a>
                        <a href={siteConfig.social.instagram} className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="Adalat on Instagram"><Instagram size={18} /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.heading}>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/menu">Menu</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/philosophy">Handi Philosophy</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/gorakhpur">Gorakhpur Branch</Link></li>
                        <li><Link href="/lucknow">Lucknow Branch</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/contact#franchise">Franchise Opportunities</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.heading}>Contact Us</h3>
                    <a className={styles.contactItem} href={telHref(siteConfig.phone)}><Phone size={16} /> <span>{siteConfig.phoneDisplay}</span></a>
                    <a className={styles.contactItem} href={`mailto:${siteConfig.email}`}><Mail size={16} /> <span>{siteConfig.email}</span></a>
                    <div className={styles.contactItem}><MapPin size={16} /> <span>Lucknow & Gorakhpur, UP</span></div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.heading}>Opening Hours</h3>
                    <div className={styles.timeBlock}>
                        <span className={styles.day}><Clock size={14} /> {siteConfig.hours.days}</span>
                        <span className={styles.time}>{siteConfig.hours.display}</span>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Adalat Restaurant. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
