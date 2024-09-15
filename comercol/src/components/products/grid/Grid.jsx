import styles from "./Grid.module.css";

export default function Grid() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PRODUCTOS</h1>
      <div className={styles.grid}>
        <div className={styles.item1}></div>
        <div className={styles.item2}></div>
        <div className={styles.item3}></div>
        <div className={styles.item4}></div>
        <div className={styles.item5}></div>
        <div className={styles.item6}></div>
        <div className={styles.item7}></div>
      </div>
    </div>
  );
}
