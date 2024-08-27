import { Link } from 'react-router-dom'
import styles from './MainShorcuts.module.css'
export default function MainShorcuts() {
    return (
        <div className={styles.mainShorcutsContainer}>
            <div className={styles.mainShorcuts}>
                <Link to="/About" className={styles.link}>
                    <img src="https://img.freepik.com/vector-gratis/trabajo-equipo-empresarial-dibujado-mano-ilustrado_23-2149154025.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1718150400&semt=ais_user" alt="Shorcuts" className={styles.img} />
                    <div>
                        <h1 className={styles.title}>Nosotros</h1>
                        <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.readMore}>Read more</p>
                    </div>
                </Link>
            </div>
            <div className={styles.mainShorcuts}>
                <Link to="/Products" className={styles.link}>
                    <img src="https://img.freepik.com/fotos-premium/crear-pagina-aterrizaje-diseno-interfaz-usuario-limpia-elegante_1096167-130186.jpg" alt="Shorcuts" className={styles.img} />
                    <div>
                        <h1 className={styles.title}>Productos</h1>
                        <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.readMore}>Read more</p>
                    </div>
                </Link>
            </div>
            <div className={styles.mainShorcuts}>
                <Link to="/#" className={styles.link}>
                    <img src="https://img.freepik.com/vector-gratis/rastreador-ninos-gps-relojes-ilustracion-concepto-abstracto_335657-1813.jpg" alt="Shorcuts" className={styles.img} />
                    <div>
                        <h1 className={styles.title}>Tracking</h1>
                        <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.readMore}>Read more</p>
                    </div>
                </Link>
            </div>
            <div className={styles.mainShorcuts}>
                <Link to="/Contact" className={styles.link}>
                    <img src="https://img.freepik.com/vector-premium/ilustracion-diseno-unico-publicacion-linea_362714-849.jpg" alt="Shorcuts" className={styles.img} />
                    <div>
                        <h1 className={styles.title}>Contactanos</h1>
                        <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.readMore}>Read more</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
