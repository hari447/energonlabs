import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/innerbanner.jpg";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

function About() {
  return (
    <>
      <Navbar />
      {/* <h1>About Page</h1> */}
      <Hero cName="Innerpg-Hero" heroImg={AboutImg} title="About Us" info="" />
      <Welcome />
      <Footer />
    </>
  );
}
export default About;
