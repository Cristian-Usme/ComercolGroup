import { useState, useEffect } from 'react';
import styles from './MainSlide.module.css';

const slidesData = [
    {
        url: 'https://ideogram.ai/assets/progressive-image/balanced/response/ms4pBBMqQOmfmGQ2ZrpSZA',
    },
    {
        url: 'https://ideogram.ai/assets/progressive-image/balanced/response/EO1oXL14SguW2m97lu-IEQ',
    },
    {
        url: 'https://ideogram.ai/assets/progressive-image/balanced/response/vJLzZxeIStqn4wvh5x2OGQ',
    }
];

const MainSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
        }, 4000);  // Intervalo de 4 segundos para todas las diapositivas

        return () => clearInterval(intervalId);
    }, []);

    const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1));
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (

        <div className={styles.sliderContainer}>
            <h1 className={styles.title}> Nuestro equipo</h1>

            <div className={styles.slider}>
                {slidesData.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
                        style={{
                            backgroundImage: `url(${slide.url})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                ))}
                <div className={styles.navigation}>
                    {slidesData.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`${styles.dot} ${slideIndex === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => goToSlide(slideIndex)}
                        >
                            ⦿
                        </div>
                    ))}
                </div>
                <div className={styles.arrows}>
                    <div className={styles.leftArrow} onClick={goPrevious}>❮</div>
                    <div className={styles.rightArrow} onClick={() => setCurrentIndex((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1))}>❯</div>
                </div>
            </div>
        </div>
    );
};

export default MainSlide;
