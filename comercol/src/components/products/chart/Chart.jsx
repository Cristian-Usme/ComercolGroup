import styles from "./Chart.module.css";
import React from "react";
import CountUp from "react-countup";

export default function Chart() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <CountUp start={0} end={3} duration={7} className={styles.cont} />
          <h2>SEDES</h2>
        </div>

        <div className={styles.col}>
          <CountUp start={0} end={1238} duration={7} className={styles.cont} />
          <h2>PRODUCTOS COMERCIADOS ESTE MES</h2>
        </div>

        <div className={styles.colf}>
          <CountUp start={0} end={4} duration={7} className={styles.cont} />
          <h2>PUERTOS DE OPERACIÓN</h2>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.colf}>
          <h1>PRODUCTO DE LA TEMPORADA</h1>
          <br />
          <h2>Cacharros Navideños</h2>
        </div>
      </div>
    </div>
  );
}
