import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ResponsiveCarousel.module.css';
import Tracking from "../tracking/Tracking.jsx";
import { useState } from "react";

export default function ResponsiveCarousel() {

    const [showTracking, setShowTracking] = useState(false);

    const handleTrackingClick = () => {
        setShowTracking(!showTracking); // Cambia el estado para mostrar o ocultar el componente Tracking
    };

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
                breakpoint: 1025,  // Para pantallas de 1024px o menos
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,  // Para pantallas de 425px o menos
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,  // Para pantallas de 425px o menos
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.column}>
            <div className={styles.carouselContainer}>
                <Slider {...settings}>
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
                        <a onClick={handleTrackingClick} className={styles.link}>
                            <img src="https://img.freepik.com/vector-gratis/rastreador-ninos-gps-relojes-ilustracion-concepto-abstracto_335657-1813.jpg" alt="Shorcuts" className={styles.img} />
                            <div>
                                <h1 className={styles.title}>Tracking</h1>
                                <p className={styles.text}>Comercol Group. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className={styles.readMore}>Read more</p>
                            </div>
                        </a>
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
                </Slider>
            </div>
            <div className={styles.trackingContainer}>
                {showTracking && <Tracking />}
            </div>
        </div>
    );
}
