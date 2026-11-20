import styles from './SteamEffect.module.css';

/**
 * Garam Garam Bhaaf (Rising Hot Steam Effect)
 * Highly realistic, appetizing, GPU-accelerated steam effect for fresh, piping-hot dishes.
 */
export default function SteamEffect({ intensity = 'normal', className = '' }) {
    return (
        <div
            className={`${styles.steamContainer} ${intensity === 'high' ? styles.intensityHigh : ''} ${className}`}
            aria-hidden="true"
        >
            {/* Simmering Heat Underglow (Tandoor / Woodfire Earthen Warmth) */}
            <div className={styles.heatGlow} />

            {/* Dense Center Steam Plumes */}
            <span className={`${styles.steamWisp} ${styles.wisp1}`} />
            <span className={`${styles.steamWisp} ${styles.wisp2}`} />
            <span className={`${styles.steamWisp} ${styles.wisp3}`} />
            <span className={`${styles.steamWisp} ${styles.wisp4}`} />

            {/* Billowing Atmospheric Steam Mist */}
            <span className={`${styles.steamCloud} ${styles.cloud1}`} />
            <span className={`${styles.steamCloud} ${styles.cloud2}`} />
        </div>
    );
}
