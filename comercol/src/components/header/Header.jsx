import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <div className={styles.logo}>
          {/* <h1>COMERCOL</h1>
          <p>GROUP</p> */}

          <img src="../../../public/img/LOGO-CON-TEXTO-COMERCOL-2 - copia.png" alt="Logo" style={ { width: "150px" }}/>
        </div>
        <div>
          <div className={styles.burgerMenu} onClick={toggleMenu}>
            <button className={styles.burger}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ""}`}>
            <ul className={styles.navList}>
              <div className={styles.navLi}>
                <li className={styles.navItem}>
                  <Link to="/">Inicio</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/About">Nosotros</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/Products">Productos</Link>
                </li>
              </div>
              <li className={`${styles.navItem} ${styles.specialItem}`}>
                <Link to="/Contact">Contáctanos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
