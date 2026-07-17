import Header from "./components/Header";
import Hero from "./components/Hero";
import Layanan from "./components/Layanan";
import Proses from "./components/Proses";
import Portofolio from "./components/Portofolio";
import TechMarquee from "./components/TechMarquee";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="kk">
      <Header />

      <main id="top">
        <Hero />
        <Layanan />
        <Proses />
        <Portofolio />
        <TechMarquee />
        <Kontak />
      </main>

      <Footer />
    </div>
  );
}
