import { Link } from "react-router-dom"
import style from "./MainAbout.module.css"

export default function MainAbout() {
    return (
        <div className={style.mainAbout}>
            <div className={style.leftTitle}>
                <h1 className={style.h1}>Sobre <br /> <span>Nosotros</span></h1>
                <p className={style.readMore}><Link to="/About" className={style.link}>Read more</Link></p>
            </div>
            <div className={style.right}>
                <h2 className={style.h2}>Quienes somos?</h2>
                <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate.</p>
            </div>
        </div>
    )
}
