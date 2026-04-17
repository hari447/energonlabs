import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResourcesImg from "../images/innerbanner.jpg";
import Footer from "../components/Footer";
function Resources() {
  return (
    <>
      <Navbar />
      {/* <h1>Resources Page</h1> */}
      <Hero
        cName="Innerpg-Hero"
        heroImg={ResourcesImg}
        title="Resources"
        info=""
      />
      <Footer />
    </>
  );
}
export default Resources;
