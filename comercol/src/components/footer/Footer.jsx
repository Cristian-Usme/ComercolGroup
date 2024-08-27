import styles from "./Footer.module.css"

const Footer = () => {
    return (

        <div className={styles.footer}>
            <footer className={styles.lblfooter}>
                <div className={styles.itemsFooter}>
                    <div className={styles.logoComercol}>
                        <h1 >Comercol</h1>
                        <h3 >Group</h3>
                    </div>
                    <div className={styles.itemContainer}>
                        <h2 >Oficina</h2>
                        <ul>
                            <li className={styles.item}>Cra 33 #33 Norte - 33</li>
                            <li className={styles.item}>+57 64 4444444</li>
                            <li className={styles.item}>atencioncliente@comercol.com</li>
                        </ul>
                    </div>
                    <div className={styles.itemContainer} >
                        <h2>Redes</h2>
                        <ul>
                            <li className={styles.item}>Facebook</li>
                            <li className={styles.item}>Instagram</li>
                            <li className={styles.item}>LinkedIn</li>
                        </ul>
                    </div>
                    <div className={styles.itemContainer} id={styles.Consultas}>
                        <h2 >Consultas</h2>
                        <p className={styles.item}>Para cualquier duda o inquietud <br />
                            comuniquese a: +57 64 4444444</p>
                    </div>
                    <div className={styles.itemContainer} id={styles.Image}>
                        <img src="../../../public/vite.svg" alt="" />
                    </div>
                </div>
                <div className={styles.privacity}>
                    <p>Politica de privacidad <br />&copy; Creado por DevIathan Software</p>
                </div>

            </footer>
        </div>

    );
};

export default Footer