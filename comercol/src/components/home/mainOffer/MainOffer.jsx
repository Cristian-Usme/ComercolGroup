import style from './MainOffer.module.css'

export default function MainOffer() {
    return (
        <div className={style.offer}>
            <h2 className={style.title}>Qué ofrecemos?</h2>
            <div className={style.mainOffer}>
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
            </div>
        </div>
    )
}
