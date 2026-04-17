import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DownloadsImg from "../images/service.jpg";
import Footer from "../components/Footer";
function Downloads() {
  return (
    <>
      <Navbar />
      {/* <h1>Downloads Page</h1> */}
      <Hero
        cName="Innerpg-Hero"
        heroImg={DownloadsImg}
        title="Downloads"
        info=""
      />
      <Footer />
    </>
  );
}
export default Downloads;
