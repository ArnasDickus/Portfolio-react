import React from "react";
import classes from "./SectionTitle.module.scss";

const SectionTitle = props => {
  return (
    <h2 className={[classes.Title, classes[props.titleType]].join(" ")}>
      {props.children}
    </h2>
  );
};

export default SectionTitle;
