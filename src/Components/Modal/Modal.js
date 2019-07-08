import React from "react";
import classes from "./Modal.module.scss";
import Alink from "../UI/Alink/Alink";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

const Modal = props => {
  return (
    <div className={classes.Modal}>
      {/* <div className={`${classes.Modal}, ${classes.Visible}`}> */}
      <div className={classes.Inner}>
        <SectionTitle titleType="GetInTouch">Get in Touch</SectionTitle>
        <div className={classes.wrapper}>
          <p className={classes.Description}>You can contact me here:</p>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <i className={`${classes.Icon} fas fa-phone`} />
              <span className={classes.Span}>+37062070792</span>
            </li>
            <li className={classes.li}>
              <i className={`${classes.Icon} far fa-envelope`} />
              <span className={classes.Span}> 1arnasdickus1@gmail.com</span>
            </li>
            <li className={classes.li}>
              <i className={`${classes.Icon} fab fa-linkedin`} />

              <Alink
                href="https://www.linkedin.com/in/arnas-di%C4%8Dkus-a77b15162/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classes.Span}> Linkedin</span>
              </Alink>
            </li>
          </ul>
        </div>
      </div>
      <p className={classes.Close} onClick={props.CloseModal}>
        X
      </p>
    </div>
  );
};

export default Modal;
