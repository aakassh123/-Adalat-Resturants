"use client";
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Volume2, VolumeX, Flame, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import styles from './HandiSection.module.css';

const HandiSection = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleAudio = () => {
        if (!videoRef.current) return;
        const nextMuted = !videoRef.current.muted;
        videoRef.current.muted = nextMuted;
        setIsMuted(nextMuted);
    };

    return (
        <section className={styles.section} aria-label="Our Handi Speciality">
            {/* Cinematic Background Video Layer */}
            <div className={styles.videoWrap}>
                <video
                    ref={videoRef}
                    src="/videos/handi-signature.mp4"
                    poster="/handi-dish.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.bgVideo}
                />
                {/* Seamless Multi-Layer Gradient Overlay (Organic Lighting, No Box Barrier) */}
                <div className={styles.videoOverlay} />
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.contentCol}>
                    {/* Floating Luxury Badges */}
                    <div className={styles.badgeRow}>
                        <span className={styles.badge}>
                            <Sparkles size={14} className={styles.badgeIcon} />
                            <span>Signature Heritage</span>
                        </span>
                        <span className={styles.liveIndicator}>
                            <span className={styles.pulsingDot} />
                            <Flame size={14} className={styles.flameIcon} />
                            <span>Slow-Cooked on Woodfire</span>
                        </span>
                    </div>

                    <Reveal as="span" className={styles.eyebrow}>
                        Authentic Clay Pot Tradition
                    </Reveal>

                    <Reveal as="h2" className={styles.title} delay={0.06}>
                        Our Handi <span className={styles.goldText}>Speciality</span>
                    </Reveal>

                    <Reveal as="p" className={styles.leadText} delay={0.12}>
                        One of Adalat’s most iconic culinary offerings is our authentic
                        <strong className={styles.highlight}> Gorakhpur Special Handi Meat</strong>,
                        slow-cooked inside traditional earthen clay pots over gentle woodfire embers.
                    </Reveal>

                    <Reveal as="p" className={styles.bodyText} delay={0.18}>
                        Sealed with fresh dough to trap aromatic steam, the meat simmers in cold-pressed mustard oil
                        and whole hand-ground spices for hours — yielding fall-apart tenderness and a rich, smoky rustic flavour that cannot be replicated.
                    </Reveal>

                    {/* Artisanal Feature Chips (Glassmorphism over video) */}
                    <Reveal delay={0.24}>
                        <div className={styles.featureChips}>
                            <div className={styles.chip}>
                                <span className={styles.chipDot}>🏺</span>
                                <span>Clay Pot Sealed</span>
                            </div>
                            <div className={styles.chip}>
                                <span className={styles.chipDot}>🔥</span>
                                <span>Woodfire Embers</span>
                            </div>
                            <div className={styles.chip}>
                                <span className={styles.chipDot}>🌿</span>
                                <span>Stone-Ground Spices</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Action Buttons */}
                    <Reveal delay={0.3}>
                        <div className={styles.actionRow}>
                            <Link href="/philosophy" className={styles.btnPrimary}>
                                <span>Explore Handi Philosophy</span>
                                <ArrowRight size={18} className={styles.btnIcon} />
                            </Link>
                            <Link href="/menu" className={styles.btnSecondary}>
                                <span>View Handi Menu</span>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Video Sound Control (Floating bottom right) */}
            <button
                type="button"
                onClick={toggleAudio}
                className={styles.soundToggle}
                aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                title={isMuted ? "Unmute sound" : "Mute sound"}
            >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                <span className={styles.soundLabel}>{isMuted ? "Sound Off" : "Sound On"}</span>
            </button>
        </section>
    );
};

export default HandiSection;
