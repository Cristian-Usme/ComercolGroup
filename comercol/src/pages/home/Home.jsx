import MainAbout from "../../components/home/mainAbout/MainAbout";
import CarouselOffer from "../../components/home/mainOffer/CarouselOffer";
import MainOffer from "../../components/home/mainOffer/MainOffer";
import MainParallax from "../../components/home/mainParallax/MainParallax";
import MainShorcuts from "../../components/home/mainShorcuts/MainShorcuts";
import ResponsiveCarousel from "../../components/home/mainShorcuts/ResponsiveCarousel";
import MainSlide from "../../components/home/mainSlide/MainSlide";

export default function Home() {
  return (
    <div>
      <MainParallax />
      <MainShorcuts />
      <ResponsiveCarousel />
      <MainAbout />
      <MainOffer />
      <CarouselOffer />
      <MainSlide />
    </div>
  );
}
