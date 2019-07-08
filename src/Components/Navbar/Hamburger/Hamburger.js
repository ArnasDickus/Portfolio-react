import React, { Component } from "react";
import classes from "./Hambuger.module.scss";

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      HamburgerOpen: false
    };
  }
  handleClick = () => {
    console.log("hello world");
    this.setState({ HamburgerOpen: !this.state.HamburgerOpen });
    this.props.menuOpen();
  };
  render() {
    return (
      <div
        className={classes.Start}
        // className = {this.state.HamburgerOpen ? classes.Start : [classes.start}
        onClick={this.handleClick}
      >
        <div className={classes.Middle} />
      </div>
    );
  }
}

export default Hamburger;
/*
On click Add class that changes class
*/
