import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../images/contact.jpg";
import Footer from "../components/Footer";
import Address from "../components/Address";
function Contact() {
  return (
    <>
      <Navbar />
      {/* <h1>Contact Page</h1> */}
      <Hero
        cName="Innerpg-Hero"
        heroImg={ContactImg}
        title="Contact Us"
        info=""
      />
      <Address />
      <Footer />
    </>
  );
}
export default Contact;
