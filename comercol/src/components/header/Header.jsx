import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerDiv}>
                <div className={styles.logo}>
                    <h1>COMERCOL</h1>
                    <p>GROUP</p>
                </div>
                <div>
                    <div className={styles.burgerMenu} onClick={toggleMenu}>
                        <button className={styles.burger}><i className="fa-solid fa-bars"></i></button>
                    </div>
                    <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
                        <ul className={styles.navList}>
                            <div className={styles.navLi}>
                                <li className={styles.navItem}><a href="#inicio">Inicio</a></li>
                                <li className={styles.navItem}><a href="#sobre-nosotros">Nosotros</a></li>
                                <li className={styles.navItem}><a href="#productos">Productos</a></li>
                            </div>
                            <li className={`${styles.navItem} ${styles.specialItem}`}><a href="#contactanos">Contáctanos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
