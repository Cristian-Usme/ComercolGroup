import styles from './Contenedor.module.css';

export default function Parallax() {
  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.parallax}></div>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h1>Welcome to Our Site</h1>
          <p>
            Welcome visitors to your site with a short, engaging introduction. <br />
            Double click to edit and add your own text.
          </p>
        </div>
      </div>
    </div>
  );
}