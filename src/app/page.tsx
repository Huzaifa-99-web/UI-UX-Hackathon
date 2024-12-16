import Hero from "./components/homeComponents/Hero";
import { Search } from "./components/homeComponents/Search";
import { PopularCars } from "./components/homeComponents/PopularCars";
import RecommendationCar from "./components/homeComponents/RecommendationCar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="px-16 mx-auto sm:px-5 ">
        <Hero />
        <Search />
        <PopularCars />
        <RecommendationCar />
      </div>
      <div className="sm:relative  sm:top-[400px]">
        <Footer />
      </div>
    </div>
  );
}
