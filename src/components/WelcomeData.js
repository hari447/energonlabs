import { Component } from "react";
import "./WelcomeStyles.css";

class WelcomeData extends Component {
  render() {
    return (
      <>
        <div className={this.props.cName}>
          <div className="Welcome_grid_left">
            <img src={this.props.img1} alt="Welcome Img" />
          </div>
          <div className="Welcome_grid_right">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomeData;
