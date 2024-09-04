import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
const Form = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className={styles.contact}>
            <div className={styles.containerImg}>
            </div>
            <div className={styles.container}>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.nameAndLastName}>
                            <div>
                                <label htmlFor="nombre" className={`${styles.label} ${styles.labelNames}`}>Nombre</label>
                                <input type="text" {...register('nombre')} id="nombre" placeholder="Nombre" className={styles.inputNames} />
                            </div>
                            <div>
                                <label htmlFor="apellido" className={`${styles.label} ${styles.labelNames}`}>Apellido</label>
                                <input type="text" {...register('apellido')} id="apellido" placeholder='Apellido' className={styles.inputNames} />
                            </div>
                        </div>

                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" {...register('email')} placeholder='Email' id="email" className={styles.input}/>
                        </div>
                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="telefono" className={styles.label}>Teléfono</label>
                            <input type="tel" {...register('telefono')} placeholder='Numero' id="telefono" className={styles.input}/>
                        </div>
                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="opciones" className={styles.label}>Opciones</label>
                            <select id="opciones" {...register('opciones')} className={styles.select} >
                                <option value="opcion1">Opción 1</option>
                                <option value="opcion2">Opción 2</option>
                                <option value="opcion3">Opción 3</option>
                                <option value="opcion4">Opción 4</option>
                            </select>
                        </div>
                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
                            <textarea {...register('mensaje')} id="mensaje" className={styles.textArea}/>
                        </div>
                        <button type="submit" className={styles.button}>Enviar</button>
                    </form>
                </div>

                <div>
                    <h1 className={styles.title}>A un paso <br /> De comunicarnos </h1>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe mollitia perferendis, laborum fugit voluptatibus, exercitationem aliquid facilis a maiores libero in omnis, praesentium suscipit earum ipsum assumenda possimus. Nostrum, voluptates.</p>
                    <div className={styles.canales}>
                        <div >
                            <h4 className={styles.titleRedes}>Telefono</h4>
                            <p>+57 64 4444444</p>
                        </div>
                        <div>
                            <h4 className={styles.titleRedes}>Email</h4>
                            <p>atencioncliente@comercol.com</p>
                        </div>
                        <div className={styles.redesSocial}>
                            <h4 className={styles.titleRedes}>Redes Sociales</h4>
                            <button className={styles.redes}><i className="fa-brands fa-facebook-f"></i></button>
                            <button className={styles.redes}><i className="fa-brands fa-twitter"></i></button>
                            <button className={styles.redes}><i className="fa-brands fa-linkedin-in"></i></button>
                            <button className={styles.redes}><i className="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
