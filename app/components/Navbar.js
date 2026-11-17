"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import styles from './Navbar.module.css';
import { siteConfig, telHref, waLink } from '../lib/siteConfig';

const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About Us' },
    { href: '/philosophy', label: 'Handi Philosophy' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/gorakhpur', label: 'Locations' },
    { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const pathname = usePathname();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const lastY = useRef(0);
    const ticking = useRef(false);
    const openRef = useRef(false);

    useEffect(() => { openRef.current = open; }, [open]);

    // Single scroll listener (previously re-registered on every scroll)
    useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                setScrolled(y > 30);
                if (!openRef.current) {
                    setHidden(y > lastY.current && y > 220);
                }
                lastY.current = y;
                ticking.current = false;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll + Esc to close when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [open]);

    useEffect(() => { setOpen(false); }, [pathname]);

    const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href) || (href === '/gorakhpur' && pathname === '/lucknow'));

    return (
        <>
            <header className={`${styles.navbar} ${hidden ? styles.hidden : ''} ${scrolled ? styles.scrolled : ''}`}>
                <nav className={`${styles.bar}`} aria-label="Main navigation">
                    <Link href="/" className={styles.logo} aria-label="Adalat Restaurant home">
                        <Image
                            src={siteConfig.logo}
                            alt="Adalat Restaurant - Authentic North Indian & Handi Dishes"
                            width={180}
                            height={100}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    <div className={styles.links}>
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}
                                aria-current={isActive(l.href) ? 'page' : undefined}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <a href={telHref(siteConfig.phone)} className={styles.callButton}>
                            <Phone size={15} fill="currentColor" />
                            <span>Call Now</span>
                        </a>
                        <button
                            className={styles.mobileToggle}
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </nav>
            </header>

            <div id="mobile-menu" className={`${styles.mobileMenu} ${open ? styles.open : ''}`} aria-hidden={!open}>
                <div className={styles.mobileLogoContainer}>
                    <Image
                        src={siteConfig.logo}
                        alt="Adalat Restaurant"
                        width={160}
                        height={80}
                        className={styles.mobileLogo}
                    />
                </div>
                {links.map((l, i) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        className={styles.mobileLink}
                        style={{ transitionDelay: open ? `${120 + i * 45}ms` : '0ms' }}
                        onClick={() => setOpen(false)}
                        tabIndex={open ? 0 : -1}
                    >
                        {l.label}
                    </Link>
                ))}
                <div className={styles.mobileCtas} style={{ transitionDelay: open ? '480ms' : '0ms' }}>
                    <a href={telHref(siteConfig.phone)} className={styles.mobileCall} tabIndex={open ? 0 : -1}><Phone size={16} /> Call Now</a>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.mobileWa} tabIndex={open ? 0 : -1}><MessageCircle size={16} /> WhatsApp</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
