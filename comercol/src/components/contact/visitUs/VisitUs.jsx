import style from './VisitUs.module.css'

export default function VisitUs() {
    return (
        <div className={style.visitUs}>
            <div className={style.textVisitUs}>
                <div>
                    <h1 className={style.h1}>Visítanos</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti laudantium officia est, amet numquam unde corporis veritatis minima eaque impedit non consequuntur aliquam, ipsa optio architecto nisi tenetur? Eveniet.</p>
                </div>
                <div>
                    <h3>Encuentranos</h3>
                    <p>Cra 33 #33 Norte - 33</p>
                </div>
                <div>
                    <h3>Horarios de atención</h3>
                    <p>Lunes a Viernes de 9:00 a 18:00</p>
                    <p>Sabados de 9:00 a 13:00</p>
                    <p>Domingos cerrados</p>
                </div>
            </div>
            <div>
            <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.88394663189965!2d-75.5896524!3d6.2448592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e14618cd342b679%3A0xb3084e2d1d1ef7da!2sSmart%20Talent%20IT!5e0!3m2!1ses!2sus!4v1718166484556!5m2!1ses!2sus" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}
