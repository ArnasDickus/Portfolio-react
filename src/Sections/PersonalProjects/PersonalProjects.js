import React from "react";
import SectionTitle from "../../Components/UI/SectionTitle/SectionTitle";
import classes from "./PersonalProjects.module.scss";
import Alink from "../../Components/UI/Alink/Alink";
import Button from "../../Components/UI/Button/Button";

import Forkify from "../../img/Forkify-1920.jpg";
import EnigmaAssignment from "../../img/enigma-assignment-1920.jpg";
import FullStackWeather from "../../img/full-stack-weather-app.jpg";
import OldPortfolio from "../../img/Portfolio.jpg";

const PersonalProjects = () => {
  return (
    <section className={classes.Container}>
      <SectionTitle titleType="White">Personal Projects</SectionTitle>
      <div className={classes.ProjectsContainer}>
        <div className={classes.Collumn1}>
          <Alink
            href="https://arnasdickus.github.io/Forkify/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Forkify} alt="Forkify" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>Forkify</strong> - A search engine for website food2fork.
            Allows you to search website for recipes and display it on website.
            You can add recipes to shoping lists. Increase serving sizes. Add
            favourites. With implemented local storage for favourite recipes.
            The project uses food2fork free account, because of it there's
            limited api requests per day.
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
              href="https://arnasdickus.github.io/Forkify/"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
              href="https://github.com/ArnasDickus/Forkify"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Github Project</Button>
            </Alink>
          </div>
        </div>
        <div className={classes.Collumn1}>
          <Alink
            href="https://www.itarnas.lt/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={EnigmaAssignment} alt="Enigma Assignment" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>Enigma Assignment</strong> - 4 page application that stores
            users and allows you to edit them and delete it. In local storage
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
              href="https://www.itarnas.lt/"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
              href="https://github.com/ArnasDickus/enigma-assignment"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Github Project</Button>
            </Alink>
          </div>
        </div>
      </div>
      <div className={classes.ProjectsContainer}>
        <div className={classes.Collumn1}>
          <Alink
            href="https://arnas-weather-application.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FullStackWeather} alt="Full stack weather app" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>Weather App</strong> - Full stack node application that
            displays api from chosen country.
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
              href="https://arnas-weather-application.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
              href="https://github.com/ArnasDickus/Weather-app"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Github Project</Button>
            </Alink>
          </div>
        </div>
        <div className={classes.Collumn1}>
          <Alink
            href="https://arnasdickus.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={OldPortfolio} alt="Javascript portfolio" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>First portfolio</strong> - Written in pure javascript,
            postcss.
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
              href="https://arnasdickus.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
              href="https://github.com/ArnasDickus/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Github Project</Button>
            </Alink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
