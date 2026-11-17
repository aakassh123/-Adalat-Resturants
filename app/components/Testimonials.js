import { Quote } from 'lucide-react';
import Reveal from './Reveal';
import styles from './Testimonials.module.css';

const reviews = [
    {
        text: "The Handi Meat is absolutely divine! Best North Indian food in Lucknow. The authentic flavors remind me of home-cooked meals.",
        author: "Rajesh Kumar"
    },
    {
        text: "Adalat has become our family's favorite restaurant. The quality and taste are consistently excellent. Highly recommended!",
        author: "Priya Sharma"
    },
    {
        text: "The Gorakhpur Special Handi Meat is worth every penny. Authentic flavors that you don't find anywhere else.",
        author: "Amit Verma"
    }
];

const Testimonials = () => (
    <section className={styles.section}>
        <div className="container">
            <div className={styles.header}>
                <Reveal as="span" className="eyebrow">Testimonials</Reveal>
                <Reveal as="h2" className={styles.heading} delay={0.05}>What Our Guests Say</Reveal>
                <Reveal as="p" className={styles.subheading} delay={0.1}>Trusted by food lovers across Lucknow and beyond.</Reveal>
            </div>

            <div className={styles.grid}>
                {reviews.map((review, index) => (
                    <Reveal key={index} delay={index * 0.12} y={50} className={styles.card}>
                        <Quote size={38} className={styles.quoteIcon} />
                        <p className={styles.reviewText}>{review.text}</p>
                        <p className={styles.author}>- {review.author}</p>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
