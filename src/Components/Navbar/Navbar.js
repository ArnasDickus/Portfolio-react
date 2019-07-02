import React, { Component } from "react";
import classes from "./Navbar.module.css";
import Alink from "../UI/Alink/Alink";
import Button from "../UI/Button/Button";

class Navbar extends Component {
  render() {
    return (
      <nav className={classes.container}>
        <div>
          <h1 className={classes.title}>AD</h1>
        </div>
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
              <Button>Get in Touch</Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
