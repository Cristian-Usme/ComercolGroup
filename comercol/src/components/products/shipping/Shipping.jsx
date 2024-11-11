import styles from "./Shipping.module.css";

export default function Shipping() {
  return (
    <div className={styles.list}>
      <img
        className={styles.image}
        src="https://cdn.pixabay.com/photo/2014/11/17/12/15/semi-trailers-534577_1280.jpg"
        alt="Truck"
      />
      <img
        className={styles.image}
        src="https://cdn.pixabay.com/photo/2016/05/17/20/56/locomotive-1399080_1280.jpg"
        alt="Train"
      />
      <img
        className={styles.image}
        src="https://cdn.pixabay.com/photo/2022/02/14/12/10/plane-7013022_1280.jpg"
        alt="Plane"
      />
      <img
        className={styles.image}
        src="https://cdn.pixabay.com/photo/2015/01/11/10/28/container-ship-596083_1280.jpg"
        alt="Ship"
      />
    </div>
  );
}
