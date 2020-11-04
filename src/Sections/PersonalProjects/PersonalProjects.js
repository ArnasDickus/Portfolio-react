import React from "react";
import SectionTitle from "../../Components/UI/SectionTitle/SectionTitle";
import classes from "./PersonalProjects.module.scss";
import Alink from "../../Components/UI/Alink/Alink";
import Button from "../../Components/UI/Button/Button";
import EnigmaAssignment from "../../img/enigma-assignment-1920.jpg";
import BreakingBad from '../../img/breaking-bad.png';
import AngularEmail from '../../img/angular-email.png';
import CrownClothing from '../../img/crown-clothing.jpg';

const PersonalProjects = () => {
  return (
    <section className={classes.Container}>
      <SectionTitle titleType="White">Personal Projects</SectionTitle>
      <div className={classes.ProjectsContainer}>
        <div className={classes.Collumn1}>
          <Alink
              href="https://arnasdickus.github.io/breaking-bad-app/"
              target="_blank"
              rel="noreferrer"
          >
            <img src={BreakingBad} alt="Breaking Bad" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>Breaking Bad</strong> - Front-end Application that allows you to search Breaking bad Characters.
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
                href="https://arnasdickus.github.io/breaking-bad-app/"
                target="_blank"
                rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
                href="https://github.com/ArnasDickus/breaking-bad-app"
                target="_blank"
                rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Github Project</Button>
            </Alink>
          </div>
        </div>

        <div className={classes.Collumn1}>
          <Alink
            href="https://arnasdickus.github.io/angular-email-client/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={AngularEmail} alt="Enigma Assignment" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>Angular Email</strong> - Front-end application allows you to create, sent receive email.
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
              href="https://arnasdickus.github.io/angular-email-client/"
              target="_blank"
              rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
              href="https://github.com/ArnasDickus/angular-email-client"
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
              href="https://arnas-crown-live.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
          >
            <img src={CrownClothing} alt="Crown Clothing shop" />
          </Alink>
          <p className={classes.Subtitles}>
            <strong>Crown Clothing</strong> - React Firebase. Clothing shop with integrated Strip payment
          </p>
          <div className={classes.ButtonContainer}>
            <Alink
                href="https://arnas-crown-live.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Live Version</Button>
            </Alink>
            <Alink
                href="https://github.com/ArnasDickus/Crown-clothing"
                target="_blank"
                rel="noreferrer"
            >
              <Button btnType="PersonalProjects">Github Project</Button>
            </Alink>
          </div>
        </div>
        <div className={classes.Collumn1}>
          <Alink
              href="https://arnasdickus.github.io/enigma-assignment/#/"
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
                href="https://arnasdickus.github.io/enigma-assignment/#/"
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
    </section>
  );
};

export default PersonalProjects;
