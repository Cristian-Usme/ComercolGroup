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
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" {...register('nombre')} id="nombre" placeholder="Nombre" className={styles.inputNames} />
                            </div>
                            <div>
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" {...register('apellido')} id="apellido" placeholder='Apellido' className={styles.inputNames} />
                            </div>
                        </div>

                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="email">Email</label>
                            <input type="email" {...register('email')} placeholder='Email' id="email" />
                        </div>
                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="tel" {...register('telefono')} placeholder='Numero' id="telefono" />
                        </div>
                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="opciones">Opciones</label>
                            <select id="opciones" multiple {...register('opciones')}>
                                <option value="opcion1">Opción 1</option>
                                <option value="opcion2">Opción 2</option>
                                <option value="opcion3">Opción 3</option>
                                <option value="opcion4">Opción 4</option>
                            </select>
                        </div>
                        <div className={styles.inputsAndLabel}>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea {...register('mensaje')} id="mensaje" />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div>
                    <h1>A un paso <br /> De comunicarnos </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe mollitia perferendis, laborum fugit voluptatibus, exercitationem aliquid facilis a maiores libero in omnis, praesentium suscipit earum ipsum assumenda possimus. Nostrum, voluptates.</p>
                    <div className={styles.canales}>
                        <div >
                            <h4>Telefono</h4>
                            <p>+57 64 4444444</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>atencioncliente@comercol.com</p>
                        </div>
                        <div>
                            <h4>Redes Sociales</h4>
                            <button><i className="fa-brands fa-facebook-f"></i></button>
                            <button><i className="fa-brands fa-twitter"></i></button>
                            <button><i className="fa-brands fa-linkedin-in"></i></button>
                            <button><i className="fa-brands fa-instagram"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
