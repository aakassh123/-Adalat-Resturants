import styles from './MediaSection.module.css';

const quotes = [
    {
        text: "20 साल से वही लजीज स्वाद — एक बार खाओ, ज़िंदगी भर याद रहे",
        source: "News18 Lifestyle",
    },
    {
        text: "स्वाद ऐसा कि चाटते रह जाएंगे उंगलियां",
        source: "News18 Local18",
    },
    {
        text: "इसके आगे चंपारन का मटन भी फीका — पूरे शहर की फेवरेट",
        source: "News18 Gorakhpur",
    },
    {
        text: "नॉनवेज लवर्स के लिए जन्नत — गोरखपुर का मशहूर मटन",
        source: "News18 UP",
    },
];

const stats = [
    { value: "5×", label: "News18 Features" },
    { value: "20+", label: "साल का तजुर्बा" },
    { value: "#1", label: "Best Mutton Handi Gorakhpur" },
];

const badges = ["News18", "News18 Local18", "News18 Gorakhpur", "News18 UP"];

const articles = [
    {
        text: "20 साल का लजीज स्वाद",
        url: "https://hindi.news18.com/news/lifestyle/recipe-adalat-mutton-servs-best-taste-for-20-years-in-gorakhpur-know-details-7428413.html",
    },
    {
        text: "नॉनवेज लवर्स गाइड",
        url: "https://hindi.news18.com/news/uttar-pradesh/gorakhpur-mutton-lovers-must-visit-these-adalat-restaurant-and-bhola-mutton-house-for-nonveg-local18-9356298.html",
    },
    {
        text: "हांडी मटन रेसिपी",
        url: "https://hindi.news18.com/news/lifestyle/recipe-gorakhpur-famous-adalat-handi-mutton-recipe-traditional-smoky-flavour-taste-local18-10125384.html",
    },
    {
        text: "शहर की फेवरेट दुकान",
        url: "https://hindi.news18.com/news/uttar-pradesh/gorakhpur-mohaddipur-adalat-handi-mutton-house-smoky-flavour-local18-10326010.html",
    },
    {
        text: "गोरखपुर का मशहूर मटन (Video)",
        url: "https://hindi.news18.com/videos/uttar-pradesh/gorakhpur-gorakhpur-famous-handi-mutton-a-paradise-for-non-veg-lovers-top-mutton-shops-in-gorakhpur-local18-10343162.html",
    },
    {
        text: "3 मशहूर नॉनवेज ठिकाने",
        url: "https://hindi.news18.com/news/uttar-pradesh/gorakhpur-top-non-veg-restaurants-in-gorakhpur-must-try-handi-mutton-and-keema-kaleji-local18-10576422.html",
    },
];

/**
 * MediaSection — "As Seen In Media"
 * @param {object} props
 * @param {boolean} [props.isLandingPage=false]  — if true, wraps heading in <h2> for SEO; else <h3>
 */
const MediaSection = ({ isLandingPage = false }) => {
    const HeadingTag = isLandingPage ? 'h2' : 'h2';

    return (
        <section className={styles.section} aria-label="As Seen In Media">
            {/* Smoky top divider */}
            <div className={styles.dividerTop} aria-hidden="true" />

            <div className={`container ${styles.inner}`}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>📺 As Seen In Media</span>
                    <HeadingTag className={styles.heading}>
                        गोरखपुर का सबसे चर्चित मटन हांडी
                    </HeadingTag>
                    <p className={styles.subHeading}>
                        News18 ने <strong>5 बार feature किया</strong> — हर बार एक ही नतीजा
                    </p>
                </div>

                {/* Quote Cards */}
                <div className={styles.quotesGrid}>
                    {quotes.map((q, i) => (
                        <div key={i} className={styles.quoteCard}>
                            <span className={styles.quoteAccent} aria-hidden="true">&ldquo;</span>
                            <p className={styles.quoteText}>{q.text}</p>
                            <div className={styles.sourceTag}>{q.source}</div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar} role="list" aria-label="Media coverage stats">
                    {stats.map((s, i) => (
                        <div key={i} className={styles.statCell} role="listitem">
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Featured In Badges */}
                <div className={styles.badgeSection}>
                    <p className={styles.badgeLabel}>Featured In</p>
                    <div className={styles.badgeRow} role="list" aria-label="Media outlets">
                        {badges.map((b, i) => (
                            <span key={i} className={styles.badge} role="listitem">{b}</span>
                        ))}
                    </div>
                </div>

                {/* Article Links */}
                <div className={styles.articlesSection}>
                    <p className={styles.articlesLabel}>📰 News18 पर पढ़ें</p>
                    <div className={styles.articleLinks}>
                        {articles.map((a, i) => (
                            <a
                                key={i}
                                href={a.url}
                                target="_blank"
                                rel="nofollow noopener"
                                className={styles.articlePill}
                                aria-label={`Read article: ${a.text} on News18 (opens in new tab)`}
                            >
                                {a.text}
                                <svg
                                    className={styles.extIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Smoky bottom divider */}
            <div className={styles.dividerBottom} aria-hidden="true" />
        </section>
    );
};

export default MediaSection;
