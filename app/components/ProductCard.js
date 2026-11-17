import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ title, description, image, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {/* Placeholder for now, can be replaced with real images */}
                <div className={styles.placeholderImage}>{title} Image</div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
