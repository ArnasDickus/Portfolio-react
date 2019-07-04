import React, { Component } from "react";
import classes from "./Navbar.module.scss";
import Button from "../UI/Button/Button";
import Hamburger from "../Navbar/Hamburger/Hamburger";
import SideMenu from "./SideMenu/SideMenu";
import { Link } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }
  ToggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    // Add logic if it's mobile or normal menu?

    return (
      <React.Fragment>
        <nav className={classes.container}>
          <div className={classes.wrapper}>
            <div>
              <h1 className={classes.title}>AD</h1>
            </div>
            <Hamburger menuOpen={this.ToggleMenu} />
            {this.state.menuOpen ? (
              <SideMenu OpenSideMenuModal={this.props.OpenSideMenuModal} />
            ) : (
              ""
            )}
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  <Link
                    to="home"
                    className={classes.Link}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    to="projects"
                    className={classes.Link}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className={classes.li}>
                  <Button onClick={this.props.OpenModal}>Get in Touch</Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
