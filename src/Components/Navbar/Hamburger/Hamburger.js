import React from "react";
import classes from "./Hambuger.module.scss";
const Hamburger = props => {
  return (
    <div className={classes.Start} onClick={props.menuOpen}>
      <div className={classes.Middle} />
    </div>
  );
};

export default Hamburger;
