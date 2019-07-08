import React from "react";
import classes from "./SideMenu.module.scss";
import { Link } from "react-scroll";
import Button from "../../UI/Button/Button";
import ALink from "../../../Components/UI/Alink/Alink";
const SideMenu = props => {
  return (
    <aside className={classes.aside}>
      <div>
        <ul className={classes.ul}>
          <li className={classes.item}>
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
          <li className={classes.item}>
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
          <li>
            <ALink
              target="_blank"
              href="https://drive.google.com/file/d/1GUvp38FlmORfl4BHbdAmmnIJu0i4y7ov/view?usp=sharing"
            >
              CV
            </ALink>
          </li>
          <li className={classes.item}>
            <Button btnType="SideMenu" onClick={props.OpenSideMenuModal}>
              Get in Touch
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
