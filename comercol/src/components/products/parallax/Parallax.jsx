import styles from "./Parallax.module.css";

export default function Parallax() {
  return (
    <div className={styles.mainParallax}>
      <div className={styles.textParallax}>
        <h1 className={styles.h1}>
          CONOCE TODA LA VARIEDAD DE PRODUCTOS QUE TRANSPORTAMOS
        </h1>
      </div>
    </div>
  );
}
