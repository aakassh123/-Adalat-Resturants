"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import SteamEffect from "../components/SteamEffect";
import styles from "./gallery.module.css";
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
    { src: "/gallery/chicken-biryani.webp", title: "Chicken Biryani" },
    { src: "/gallery/chicken-handi.webp", title: "Chicken Handi" },
    { src: "/gallery/chicken-tikka-boneless.webp", title: "Chicken Tikka Boneless" },
    { src: "/gallery/mutton-biryani.webp", title: "Mutton Biryani" },
    { src: "/gallery/mutton-handi.webp", title: "Mutton Handi" },
    { src: "/gallery/tandoori-chicken.webp", title: "Tandoori Chicken" },
    { src: "/hero.webp", title: "Signature Dishes" },
    { src: "/handi-dish.webp", title: "Handi Speciality" },
    // { src: "/hero_home_ambience.webp", title: "Authentic Ambience" },
    // { src: "/hero_about.webp", title: "Our Story" },
    // { src: "/hero_contact.webp", title: "Cozy Dining" },
    { src: "/hero_philosophy_new.webp", title: "The Handi Process" },
    { src: "/hero-philosophy.webp", title: "Traditional Cooking" },
];

export default function Gallery() {
    const [index, setIndex] = useState(null);
    const lastFocus = useRef(null);
    const closeRef = useRef(null);
    const open = index !== null;

    const close = useCallback(() => {
        setIndex(null);
        lastFocus.current?.focus?.();
    }, []);
    const next = useCallback(() => setIndex((i) => (i + 1) % galleryImages.length), []);
    const prev = useCallback(() => setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length), []);

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    }, [open, close, next, prev]);

    const current = open ? galleryImages[index] : null;

    return (
        <>
            <Navbar />
            <Hero
                title="Our Gallery"
                subtitle="A visual journey through authentic flavours and ambience."
                backgroundImage="/hero.webp"
            />
            <main>
                <Section title="Moments at Adalat">
                    <div className={styles.galleryGrid}>
                        {galleryImages.map((img, i) => (
                            <Reveal key={img.src} delay={(i % 3) * 0.08} y={50} amount={0.15} className={`${styles.cell} ${i % 5 === 0 ? styles.wide : ''}`}>
                                <button
                                    type="button"
                                    className={styles.galleryItem}
                                    onClick={(e) => { lastFocus.current = e.currentTarget; setIndex(i); }}
                                    aria-label={`Open photo: ${img.title}`}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.title}
                                        fill
                                        sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px"
                                        className={styles.galleryImage}
                                    />
                                    {(img.src.includes('handi') || img.src.includes('biryani') || img.src.includes('chicken') || img.src.includes('dish')) && (
                                        <SteamEffect />
                                    )}
                                    <span className={styles.caption}><span className={styles.captionTitle}>{img.title}</span></span>
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </Section>

                {open && (
                    <div className={styles.modal} role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
                        <button ref={closeRef} type="button" className={styles.closeBtn} onClick={close} aria-label="Close photo"><X size={28} /></button>
                        <button type="button" className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo"><ChevronLeft size={30} /></button>
                        <button type="button" className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo"><ChevronRight size={30} /></button>
                        <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
                            <Image src={current.src} alt={current.title} width={1400} height={1000} className={styles.modalImage} sizes="92vw" priority />
                            <figcaption>{current.title} <span>{index + 1} / {galleryImages.length}</span></figcaption>
                        </figure>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
