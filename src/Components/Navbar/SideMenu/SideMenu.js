import React from "react";
import classes from "./SideMenu.module.scss";
import Alink from "../../UI/Alink/Alink";
const SideMenu = () => {
  return (
    <aside className={classes.aside}>
      <div>
        <ul className={classes.ul}>
          <li className={classes.item}>
            <Alink href="#home">Home</Alink>
          </li>
          <li className={classes.item}>
            <Alink href="#about">About</Alink>
          </li>
          <li className={classes.item}>
            <Alink href="#projects">Projects</Alink>
          </li>
          <li className={classes.item}>
            <Alink href="#improvements">Improvements</Alink>
          </li>
          <li className={classes.item}>
            <Alink href="#">Get in Touch</Alink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
