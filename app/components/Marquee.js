import styles from './Marquee.module.css';

const items = [
    "Gorakhpur Special Handi Meat",
    "Handi Chicken",
    "Mutton Curry",
    "Dum Chicken Biryani",
    "Authentic North Indian Flavours",
    "Lucknow & Gorakhpur",
];

const Marquee = () => (
    <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
            {[0, 1].map((n) => (
                <div className={styles.group} key={n}>
                    {items.map((t) => (
                        <span className={styles.item} key={t}>{t}<i className={styles.sep}>✦</i></span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default Marquee;
