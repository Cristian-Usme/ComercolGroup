import styles from './Mision.module.css';

export default function Mision() {
    return (
        <section className={styles.missionSection}>
            <div className={styles.missionImage}></div>
            <div className={styles.missionContent}>
                <h2>MISIÓN</h2>
                <p>
                    Explora el contenido fresco y relevante de nuestro blog Mi sitio. Nuestra misión es inspirarte, informarte y entretenerte con artículos interesantes y perspectivas únicas. Sumérgete en un mundo de historias cautivadoras y descubre algo nuevo en cada publicación.
                </p>
                <button className={styles.exploreButton}>Explorar más</button>
            </div>
        </section>
    );
}