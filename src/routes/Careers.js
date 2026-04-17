import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CareersImg from "../images/other.jpg";
import Footer from "../components/Footer";
function Careers() {
  return (
    <>
      <Navbar />
      {/* <h1>Careers Page</h1> */}
      <Hero cName="Innerpg-Hero" heroImg={CareersImg} title="Careers" info="" />
      <Footer />
    </>
  );
}
export default Careers;
