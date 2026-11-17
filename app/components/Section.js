import Reveal from './Reveal';
import styles from './Section.module.css';

const Section = ({ title, children, dark = false, id }) => {
    return (
        <section id={id} className={`${styles.section} ${dark ? styles.dark : ''}`}>
            <div className="container">
                {title && <Reveal as="h2" className={styles.heading}>{title}</Reveal>}
                {children}
            </div>
        </section>
    );
};

export default Section;
