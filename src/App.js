import React, { Component } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import classes from "./App.module.scss";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";
import PersonalProjects from "./Sections/PersonalProjects/PersonalProjects";
import Footer from "./Sections/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import WorkExperience from "./Sections/WorkExperience/WorkExperience";

/*
  Things to add:
  1) Create a footer DONE
  2) Add functionality for Get in Touch button. DONE
  3) Add functionality for navbar links, and aside menu links. DONE
  4) Launch weather app project. DONE
  5) Add Identical sizes photos to Project slideshow. DONE
  6) Improve text size for projects section, and add more buttons. DONE.
  7) Add hamburger animation.
  8) Add Get In Touch animation
  9) Add aside menu appearing animation.
  10) Add home screen text animation.
  11) Fix bug side menu won't disapear if increase text size.
  12) SideMenu clicking on Item should close navbar.
  13) Add timer function on footer
  14) Add CV Page. DONE
  Bonus:
  1) Add improvement section. Questionable


  Default - OpenModal False,
  Click button - OpenModal True,
  Click Exit button - OpenModal false

  Click on button. Modal appears and classes are added.
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OpenModal: false
    };
  }
  OpenModal = () => {
    this.setState({ OpenModal: true }, () => {});
  };
  CloseModal = () => {
    this.setState({ OpenModal: false }, () => {});
  };

  render() {
    return (
      <main>
        <Navbar OpenModal={this.OpenModal} OpenSideMenuModal={this.OpenModal} />
        {this.state.OpenModal ? <Modal CloseModal={this.CloseModal} /> : ""}
        {/* Fixed position is not respected, so added margin to compensate */}
        <div className={classes.AdjustPosition} />
        <Home />
        <WorkExperience />
        <Projects />
        <PersonalProjects />
        <Footer />
      </main>
    );
  }
}

export default App;
