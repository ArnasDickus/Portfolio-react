import React, { Component } from "react";
import classes from "./Navbar.module.scss";
import Alink from "../UI/Alink/Alink";
import Button from "../UI/Button/Button";
import Hamburger from "../Navbar/Hamburger/Hamburger";
import SideMenu from "./SideMenu/SideMenu";

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
            {this.state.menuOpen ? <SideMenu /> : ""}
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  <Alink href="home"> Home</Alink>
                </li>
                <li className={classes.li}>
                  <Alink href="projects"> Projects</Alink>
                </li>
                <li className={classes.li}>
                  <Alink href="improvements"> Improvements</Alink>
                </li>
                <li className={classes.li}>
                  <Alink href="about"> About</Alink>
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
