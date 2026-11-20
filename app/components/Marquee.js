import styles from './Marquee.module.css';

const items = [
    "🔥 Gorakhpur Special Handi Meat (Slow-Cooked 4h)",
    "🏺 Authentic Mitti ki Handi on Woodfire Embers",
    "🍗 Succulent Champaran Handi Chicken",
    "🍚 Royal Awadhi Mutton Dum Biryani with Saffron",
    "🌿 Stone-Ground Ancestral Spices & Kacchi Ghani Mustard Oil",
    "🍢 Charcoal Roasted Tandoori Chicken & Juicy Tikkas",
    "👑 Famous in Gorakhpur & Lucknow",
    "⭐ 4.8★ Rated by 15,000+ Happy Food Lovers",
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
