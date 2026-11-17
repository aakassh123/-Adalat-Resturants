import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, waLink, telHref } from '../lib/siteConfig';
import styles from './FloatingActions.module.css';

const FloatingActions = () => (
    <div className={styles.wrap}>
        <a
            href={waLink("Hello Adalat Restaurant, I would like to know more.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.fab} ${styles.whatsapp}`}
            aria-label="Chat with Adalat on WhatsApp"
        >
            <MessageCircle size={22} />
        </a>
        <a href={telHref(siteConfig.phone)} className={`${styles.fab} ${styles.call}`} aria-label="Call Adalat Restaurant">
            <Phone size={22} />
        </a>
    </div>
);

export default FloatingActions;
