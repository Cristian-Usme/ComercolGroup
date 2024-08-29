import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './CarouselOffer.module.css';

export default function CarouselOffer() {
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
                breakpoint: 426,  // Para pantallas de 425px o menos
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className={style.mainOffer}>
            <Slider {...settings} className={style.slider}>
                    <div className={style.item}>
                        <img src="https://img.freepik.com/vector-premium/ilustracion-vectorial-concepto-actividad-humana-diaria_1253202-222816.jpg?w=740" alt="" className={style.img} />
                        <div className={style.serviceText}>
                            <h4>Service</h4>
                            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src="https://img.freepik.com/vector-premium/ilustracion-vectorial-concepto-actividad-humana-diaria_1253202-222816.jpg?w=740" alt="" className={style.img} />
                        <div className={style.serviceText}>
                            <h4>Service</h4>
                            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src="https://img.freepik.com/vector-premium/ilustracion-vectorial-concepto-actividad-humana-diaria_1253202-222816.jpg?w=740" alt="" className={style.img} />
                        <div className={style.serviceText}>
                            <h4>Service</h4>
                            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src="https://img.freepik.com/vector-premium/ilustracion-vectorial-concepto-actividad-humana-diaria_1253202-222816.jpg?w=740" alt="" className={style.img} />
                        <div className={style.serviceText}>
                            <h4>Service</h4>
                            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate.</p>
                        </div>
                    </div>
            </Slider>
        </div>
    )
}
