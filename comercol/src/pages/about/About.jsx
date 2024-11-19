import Contenedor from "../../components/about/contenedor/Contenedor.jsx";
import AboutParallax from "../../components/about/parallax/Parallax.jsx";
import Nosotros from "../../components/about/aboutUs/Nosotros.jsx";
import Mision from "../../components/about/mision/Mision.jsx";
import Vision from "../../components/about/vision/Vision.jsx";
import Objetivos from "../../components/about/objetivos/Objetivos.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      {/* <AboutParallax /> */}
      <Contenedor />
      <Objetivos />
      <Mision />
      <Vision />
    </div>
  );
}
