import React, { Component } from "react";
import classes from "./Projects.module.scss";
import SectionTitle from "../../Components/UI/SectionTitle/SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import FriendListImage from "../../img/friendlist-image.jpg";
import FriendListThumbnail from "../../img/friendlist-thumbnail.jpg";
import MappypalsBoardImage from "../../img/mappypals-board-image.jpg";
import MappypalsThumbnail from "../../img/mappypals-board-thumbnail.jpg";

import OpenSourceImage from "../../img/open-source-project-image.jpg";
import OpenSourceThumbnail from "../../img/open-source-project-thumbnail.jpg";

import ProgressWeekReportImage from "../../img/progress-week-report-img.jpg";
import ProgressWeekReportThumbnail from "../../img/progress-week-report-thumbnail.jpg";
import QuickUpdateImage from "../../img/quick-update-image.jpg";
import QuickUpdateThumbnail from "../../img/quick-update-thumbnail.jpg";
import SignUpImage from "../../img/sign-up-img.jpg";
import SignUpThumbnail from "../../img/sign-up-thumbnail.jpg";
import SignUpValidationImage from "../../img/sign-up-validation-img.jpg";
import SignUpValidationThumbnail from "../../img/sign-up-validation-thumbnail.jpg";
import TaskCardFullImage from "../../img/task-card-full-img.jpg";
import TaskCardFullImageThumbnail from "../../img/task-card-full-thumbnail.jpg";

// import test from "../../img/friendlist.jpg";

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
      },
      {
        original: QuickUpdateImage,
        thumbnail: QuickUpdateThumbnail
      }
    ];
    return (
      <div>
        <SectionTitle titleType="Dark">Projects</SectionTitle>
        <div className={classes.wrapper}>
          <p>Mappypals Open Source MERN stack</p>
          <p>
            <strong>Project manager/front-end lead</strong> for open source
            project mappypals since April 7 2019
          </p>
        </div>
        <div className={classes.image}>
          <ImageGallery items={images} />;
        </div>
      </div>
    );
  }
}

export default Projects;
