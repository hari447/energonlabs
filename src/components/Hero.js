import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      {/* <h2>Hero Component</h2> */}
      <div className={props.cName}>
        <img src={props.heroImg} alt="Hero Img" />
        <video
          type="video/mp4"
          playsInline
          loop
          muted
          autoPlay={true}
          src={props.heroVideo}
        ></video>
        <div className="Hero-content">
          <div className="container">
            <div className="Hero-content-grid">
              <div>
                <h2>{props.title}</h2>
                <p>{props.info}</p>
              </div>
              <img src={props.mainImg} alt="right Img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
