import "./FooterStyles.css";
import { Link } from "react-router-dom";
import arrowImg from "../images/arrow.svg";
import facebook from "../images/fb.svg";
import linkedin from "../images/lin.svg";
import twitter from "../images/tw.svg";
import footerlogo from "../images/logo.png";
import footerbg from "../images/footerbg.png";
import yt from "../images/yt.svg";

// create arrow function in Services Component
const Footer = (props) => {
  const footerstyles = {
    backgroundImage: "url('https://www.energonlabs.com/images/footerbg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <>
      {/* <h1>This is {props.heading}</h1> */}
      <footer className="footer" style={footerstyles}>
        <div className="container">
          <div className="footer_top">
            <div className="ft_links">
              <h2>Ready to Collaborate? Advancing Healthcare Together</h2>
              <div className="ft_top_links">
                <Link to="/">
                  Request a Quote <img src={arrowImg} alt="arrowImg" />
                </Link>
                <Link to="/">
                  Contact Us <img src={arrowImg} alt="arrowImg" />
                </Link>
              </div>
            </div>
          </div>

          <div className="footer_links_grid">
            <div className="footer_menu">
              <h4 className="footer_hd">Quick Links</h4>
              <ul className="ftqlinks1 ftqlinks2">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Resources</Link>
                </li>
                <li>
                  <Link to="/">Downloads</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4 className="footer_hd">MAIL US</h4>
              <ul className="ftqlinks1 ftqlinks3">
                <li>
                  <Link to="mailto: info@energonlabs.com">
                    info@energonlabs.com
                  </Link>
                </li>
              </ul>
              <h4 className="footer_hd">CALL US</h4>
              <ul className="ftqlinks1 ftqlinks3">
                <li>
                  <Link to="phone: +91 40 40172171">+91 40 40172171</Link>
                </li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4 className="footer_hd">MEET US</h4>
              <h3>Energon Labs Private Limited</h3>
              <p>
                Plot No 10-B, H No 5-36/1/10B TSIIC, Kukatpally Village,
                Balanagar Mandal, Hyderabad, Telangana 500072, India
              </p>
            </div>
            <div className="footer_menu">
              <h4 className="footer_hd">FOLLOW US</h4>
              <div className="ft_soc">
                <Link to="/">
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="linkedin" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link to="/">
                  <img src={yt} alt="yt" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <img src={footerlogo} alt="footerlogo" />
        <span>© 2023, Energon Labs Limited. All right reserved</span>
      </div>
    </>
  );
};
export default Footer;
