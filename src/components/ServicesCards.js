import "./ServicesStyles.css";
import { Link } from "react-router-dom";
import arrowImg from "../images/arrow.svg";

function ServicesCards(props) {
  return (
    <>
      <div className="services_box">
        <div className="img">
          <img src={props.image} alt="ServiceImg1" />
        </div>
        <div className="info">
          <h3>{props.heading}</h3>
          <p>{props.content}</p>
          <Link to={props.link}>
            {props.linkTitle} <img src={arrowImg} alt="arrowImg" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ServicesCards;
