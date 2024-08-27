import styles from './Contenedor.module.css'

export default function Contenedor() {
    return (
        <>
            <div className={styles.blackContainer}>
                <div className={styles.textContainer}>
                    <h1>Welcome to Our Site</h1>
                </div>
                <div className={styles.textContainer}>
                    <p>Welcome visitors to your site with a short, engaging introduction.
                        <br /> Double click to edit and add your own text.</p>
                    <div className={styles.horizontalLine}></div>
                </div>
            </div>
        </>
    )
}