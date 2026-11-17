import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { menuData } from '../../data/menuData';
import { recipeMetadata } from '../../data/recipeMetadata';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Reveal from '../../components/Reveal';
import { siteConfig, waLink } from '../../lib/siteConfig';
import styles from './item.module.css';

const entries = Object.entries(menuData).flatMap(([category, items]) => items.map((item) => ({ ...item, category })));
const findItem = (slug) => entries.find((i) => i.slug === slug);

// Pre-render every dish page at build time (faster + fully crawlable)
export function generateStaticParams() {
    return entries.map((i) => ({ slug: i.slug }));
}

// Next 15: params is a Promise
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = findItem(slug);
    if (!item) return { title: 'Not Found' };

    const custom = recipeMetadata[slug];
    const title = custom?.title || `${item.name} at Adalat Restaurant Gorakhpur`;
    const description = custom?.description || item.description;
    const url = `${siteConfig.url}/menu/${slug}`;

    return {
        title,
        description,
        keywords: custom?.keywords || `${item.name}, Adalat Restaurant, best ${item.name} in Gorakhpur, authentic Indian food, Gorakhpur Restaurant`,
        alternates: { canonical: url },
        openGraph: { title, description, url, siteName: siteConfig.name, type: 'website', images: [{ url: item.image, alt: item.name }] },
        twitter: { card: 'summary_large_image', title, description, images: [item.image] },
    };
}

export default async function RecipePage({ params }) {
    const { slug } = await params;
    const item = findItem(slug);
    if (!item) notFound();

    const related = entries.filter((i) => i.category === item.category && i.slug !== item.slug).slice(0, 3);

    return (
        <>
            <Navbar />
            <Hero title={item.name} subtitle="Authentic North Indian Flavour" backgroundImage={item.image} blur />

            <main className={styles.main}>
                <div className={`container ${styles.layout}`}>
                    <Reveal className={styles.imageCol}>
                        <div className={styles.imageFrame}>
                            <Image src={item.image} alt={item.name} fill sizes="(max-width: 900px) 92vw, 520px" className={styles.image} priority />
                        </div>
                        <span className={styles.tag}>{item.category}</span>
                    </Reveal>

                    <div className={styles.content}>
                        <Link href={`/menu?category=${item.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className={styles.back}>
                            <ArrowLeft size={16} /> Back to {item.category}
                        </Link>

                        {item.seoContent?.map((section, index) => (
                            <Reveal key={index} className={styles.block} delay={index * 0.05}>
                                <h2 className={styles.heading}>{section.heading}</h2>
                                {section.paragraphs.map((p, i) => <p key={i} className={styles.text}>{p}</p>)}
                            </Reveal>
                        ))}
                        {!item.seoContent && <p className={styles.text}>{item.description}</p>}

                        <div className={styles.actions}>
                            <Link href="/contact" className={styles.primary}>Visit Us to Try This <ArrowRight size={16} /></Link>
                            <a
                                href={waLink(`Hello Adalat, I would like to know about ${item.name}.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsapp}
                            >
                                <MessageCircle size={16} /> Enquire on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {related.length > 0 && (
                    <div className={`container ${styles.relatedWrap}`}>
                        <Reveal as="h2" className={styles.relatedTitle}>More from {item.category}</Reveal>
                        <div className={styles.related}>
                            {related.map((r, i) => (
                                <Reveal key={r.slug} delay={i * 0.1}>
                                    <Link href={`/menu/${r.slug}`} className={styles.relCard}>
                                        <div className={styles.relImg}>
                                            <Image src={r.image} alt={r.name} fill sizes="(max-width: 700px) 90vw, 360px" className={styles.image} />
                                        </div>
                                        <h3>{r.name}</h3>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
