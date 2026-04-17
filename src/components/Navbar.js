import { Component } from "react";
import "./NavbarStyles.css";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../images/logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="NavbarItems">
            <h1 className="navbar-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </h1>
            <div className="mobile-menu-icon" onClick={this.handleclick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul
              className={
                this.state.clicked ? "navbar-menu active" : "navbar-menu"
              }
            >
              {MenuItems.map((item, index) => {
                console.log(index);
                return (
                  <li key={item.id}>
                    <NavLink to={item.url} className={item.cName}>
                      <i className={item.icon}></i> {item.title}
                    </NavLink>
                  </li>
                );
              })}
              {/* <li>
                <Link to="/" className="active">
                  <i class="fa-solid fa-house"></i> Home
                </Link>
              </li>
              */}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Navbar;
