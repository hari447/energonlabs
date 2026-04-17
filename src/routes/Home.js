import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import bannerImg from "../images/banner.jpg";
import bannerVideo from "../images/video.mp4";
import mainImg from "../images/bannerright.png";
import Welcome from "../components/Welcome";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* <h1>Home Page</h1> */}

      {/* calling Narvar Component */}
      <Navbar />
      {/* calling Hero Component */}
      <Hero
        cName="Hero"
        heroVideo={bannerVideo}
        heroImg={bannerImg}
        title="Innovative Solutions Analytical Precision."
        info="Our commitment to advancing pharmaceutical quality and safety
        through cutting-edge analytical methods."
        mainImg={mainImg}
      />
      {/* calling Services Component */}
      <Welcome />
      <Services />
      <Footer />
    </>
  );
}
export default Home;
