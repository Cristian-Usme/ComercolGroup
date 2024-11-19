import styles from './Vision.module.css';

export default function Vision() {
    return (
        <section className={styles.visionSection}>
            <div className={styles.visionContent}>
                <h2>Visión</h2>
                <p>
                    Explora el contenido fresco y relevante de nuestro blog Mi sitio.
                    Nuestra misión es inspirarte, informarte y entretenerte con artículos interesantes
                    y perspectivas únicas. Sumérgete en un mundo de historias cautivadoras y descubre
                    algo nuevo en cada publicación.
                </p>
                <button className={styles.exploreButton}>Explorar más</button>
            </div>
            <div className={styles.visionImage}></div>
        </section>
    );
}