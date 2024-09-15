import Parallax from "../../components/products/parallax/Parallax";
import Shipping from "../../components/products/shipping/Shipping";
import Grid from "../../components/products/grid/Grid";
import Chart from "../../components/products/chart/Chart";

export default function Products() {
  return (
    <div>
      <Parallax />
      <Shipping />
      <Grid />
      <Chart />
    </div>
  );
}
