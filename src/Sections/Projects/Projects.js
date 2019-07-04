import React, { Component } from "react";
import classes from "./Projects.module.scss";
import SectionTitle from "../../Components/UI/SectionTitle/SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../../Components/UI/Button/Button";
import Alink from "../../Components/UI/Alink/Alink";
import { Element } from "react-scroll";

import FriendListImage from "../../img/friendlist-image.jpg";
import FriendListThumbnail from "../../img/friendlist-thumbnail.jpg";
import MappypalsBoardImage from "../../img/mappypals-board-image.jpg";
import MappypalsThumbnail from "../../img/mappypals-board-thumbnail.jpg";

import OpenSourceImage from "../../img/open-source-project-image.jpg";
import OpenSourceThumbnail from "../../img/open-source-project-thumbnail.jpg";

import ProgressWeekReportImage from "../../img/progress-week-report-img.jpg";
import ProgressWeekReportThumbnail from "../../img/progress-week-report-thumbnail.jpg";

import SignUpImage from "../../img/sign-up-img.jpg";
import SignUpThumbnail from "../../img/sign-up-thumbnail.jpg";
import SignUpValidationImage from "../../img/sign-up-validation-img.jpg";
import SignUpValidationThumbnail from "../../img/sign-up-validation-thumbnail.jpg";
import TaskCardFullImage from "../../img/task-card-full-img.jpg";
import TaskCardFullImageThumbnail from "../../img/task-card-full-thumbnail.jpg";

class Projects extends Component {
  render() {
    const images = [
      {
        original: MappypalsBoardImage,
        thumbnail: MappypalsThumbnail
      },
      {
        original: TaskCardFullImage,
        thumbnail: TaskCardFullImageThumbnail
      },
      {
        original: SignUpValidationImage,
        thumbnail: SignUpValidationThumbnail
      },
      {
        original: OpenSourceImage,
        thumbnail: OpenSourceThumbnail
      },

      {
        original: FriendListImage,
        thumbnail: FriendListThumbnail
      },
      {
        original: SignUpImage,
        thumbnail: SignUpThumbnail
      },

      {
        original: ProgressWeekReportImage,
        thumbnail: ProgressWeekReportThumbnail
      }
    ];
    return (
      <Element name="projects">
        <section>
          <SectionTitle titleType="Dark">Projects</SectionTitle>
          <div className={classes.wrapper}>
            <p>Mappypals Open Source MERN stack (Currently in development)</p>
            <p>
              <strong>Project manager/front-end lead</strong> for open source
              project mappypals since April 7 2019
            </p>
            <ul className={classes.ul}>
              <li>Created over 50 Trello tasks</li>
              <li>Made 40 public announcement</li>
              <li>Reviewed over 50+ front-end pull requests</li>
            </ul>
            <div className={classes.ButtonWrapper}>
              <Alink
                target="_blank"
                href="https://github.com/zero-to-mastery/mappypals/pulls?utf8=%E2%9C%93&q=is%3Apr++author%3AArnasDickus+"
              >
                <Button btnType="Projects"> Front-end contribution</Button>
              </Alink>
            </div>
          </div>
          <div className={classes.image}>
            <ImageGallery items={images} />;
          </div>
        </section>
      </Element>
    );
  }
}

export default Projects;
