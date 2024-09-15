import styles from "./Shipping.module.css";

export default function Shipping() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Transporte</h1>
      <h2>
        La empresa cuenta con amplia experiencia en el manejo de todo tipo de
        transporte, asegurando que su mercancía llegue a tiempo y de manera
        eficiente a cualquier destino.
      </h2>
      <div className={styles.list}>
        <div className={styles.method}>
          <img
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2014/11/17/12/15/semi-trailers-534577_1280.jpg"
            alt="Truck"
          />
          <h1>Transporte Terrestre</h1>
        </div>
        <div className={styles.method}>
          <img
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2016/05/17/20/56/locomotive-1399080_1280.jpg"
            alt="Train"
          />
          <h1>Transporte Férreo</h1>
        </div>
        <div className={styles.method}>
          <img
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2022/02/14/12/10/plane-7013022_1280.jpg"
            alt="Plane"
          />
          <h1>Transporte Aéreo</h1>
        </div>
        <div className={styles.method}>
          <img
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2015/01/11/10/28/container-ship-596083_1280.jpg"
            alt="Ship"
          />
          <h1>Transporte Marítimo</h1>
        </div>
      </div>
    </div>
  );
}
