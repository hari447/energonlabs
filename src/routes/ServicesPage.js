import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesImg from "../images/service.jpg";
import Services from "../components/Services";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* <h1>Services Page</h1> */}
      <Hero
        cName="Innerpg-Hero"
        heroImg={ServicesImg}
        title="Services"
        info=""
      />
      <Services />
      <Footer />
    </>
  );
}
export default ServicesPage;
