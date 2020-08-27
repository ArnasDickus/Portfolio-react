import React from "react";
import Intro1920 from "../../img/intro-bg-1920.jpg";
import classes from "./Home.module.scss";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name="home">
      <section>
        <div className={classes.pictureContainer}>
          <img src={Intro1920} alt="" />

          <div className={classes.pictureText}>
            <h2 className={classes.Title}>My name is Arnas Dičkus</h2>
            <p className={classes.Subtitles}>Angular/React Front-end Developer</p>
            <p className={classes.Description}>
              This portfolio will reflect my progress along the way
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Home;
