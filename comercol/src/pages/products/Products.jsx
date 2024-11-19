import Parallax from "../../components/products/parallax/Parallax";
import Shipping from "../../components/products/shipping/Shipping";
import Grid from "../../components/products/grid/Grid";
import Chart from "../../components/products/chart/Chart";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <div className={styles.font}>
      <Parallax />
      <Grid />
      <Shipping />
      <Chart />
    </div>
  );
}
