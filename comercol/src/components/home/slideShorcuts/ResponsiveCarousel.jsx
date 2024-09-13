import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ResponsiveCarousel.module.css';

export default function ResponsiveCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,  // Para pantallas de 1024px o menos
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,  // Para pantallas de 425px o menos
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
            <div className={styles.slide}>
                <img src="https://img.freepik.com/vector-gratis/trabajo-equipo-empresarial-dibujado-mano-ilustrado_23-2149154025.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1718150400&semt=ais_user" alt="Shorcuts" className={styles.img} />
                <div>
                    <h1 className={styles.title}>Nosotros</h1>
                    <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet harum perferendis vitae minus ipsam.</p>
                    <p><Link to="/About">Learn more</Link></p>
                </div>
            </div>
            <div className={styles.slide}>
                <img src="https://img.freepik.com/fotos-premium/crear-pagina-aterrizaje-diseno-interfaz-usuario-limpia-elegante_1096167-130186.jpg" alt="Shorcuts" className={styles.img} />
                <div>
                    <h1 className={styles.title}>Nosotros</h1>
                    <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet harum perferendis vitae minus ipsam.</p>
                    <p><Link to="/About">Learn more</Link></p>
                </div>
            </div>
            <div className={styles.mainShorcuts}>
                <img src="https://img.freepik.com/vector-gratis/rastreador-ninos-gps-relojes-ilustracion-concepto-abstracto_335657-1813.jpg" alt="Shorcuts" className={styles.img} />
                <div>
                    <h1 className={styles.title}>Nosotros</h1>
                    <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet harum perferendis vitae minus ipsam.</p>
                    <p><Link to="/About">Learn more</Link></p>
                </div>
            </div>
            <div className={styles.slide}>
                <img src="https://img.freepik.com/vector-premium/ilustracion-diseno-unico-publicacion-linea_362714-849.jpg" alt="Shorcuts" className={styles.img} />
                <div>
                    <h1 className={styles.title}>Nosotros</h1>
                    <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet harum perferendis vitae minus ipsam.</p>
                    <p><Link to="/About">Learn more</Link></p>
                </div>
            </div>
            </Slider>
        </div>
    );
}
