import style from './MainParallax.module.css'

export default function MainParallax() {
    return (
        <>
            <div className={style.mainParallax}>
                <div className={style.textParallax}>
                    <h1 className={style.h1}>Un mundo de <br /> <span>opciones</span></h1>
                    <h4 className={style.h4}>Comercol Group</h4>
                    <div className={style.buttons}>
                        <button className={style.learnMore}>Descubre más</button>
                        <button className={style.contact}>Contáctanos</button>
                    </div>
                </div>
            </div>
        </>
    )
}
