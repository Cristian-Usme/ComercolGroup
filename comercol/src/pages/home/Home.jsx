import MainParallax from "../../components/home/mainParallax/MainParallax";
import MainShorcuts from "../../components/home/mainShorcuts/MainShorcuts";
import ResponsiveCarousel from "../../components/home/slideShorcuts/ResponsiveCarousel";


export default function Home() {
    return (
        <div>
            <MainParallax />
            <MainShorcuts />
            <ResponsiveCarousel />
        </div>
    )
}
