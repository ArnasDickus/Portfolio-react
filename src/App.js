import React, { Component } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import classes from "./App.module.scss";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";
import PersonalProjects from "./Sections/PersonalProjects/PersonalProjects";
import Footer from "./Sections/Footer/Footer";
import Modal from "./Components/Modal/Modal";

/*
  Things to add:
  1) Create a footer DONE
  2) Add functionality for Get in Touch button. DONE
  3) Add functionality for navbar links, and aside menu links. DONE
  4) Launch weather app project.
  5) Add Identical sizes photos to Project slideshow.
  6) Improve text size for projects section, and add more buttons.
  7) Add hamburger animation.
  8) Add Get In Touch animation
  9) Add aside menu appearing animation.
  10) Add home screen text animation.
  11) Fix bug side menu won't disapear if increase text size.
  12) SideMenu clicking on Item should close navbar.
  13) Add timer function on footer
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
    this.setState({ OpenModal: true }, () => {
      console.log(this.state.OpenModal);
    });
  };
  CloseModal = () => {
    this.setState({ OpenModal: false }, () => {
      console.log(this.state.OpenModal);
    });
  };

  render() {
    return (
      <main>
        <Navbar OpenModal={this.OpenModal} OpenSideMenuModal={this.OpenModal} />
        {this.state.OpenModal ? <Modal CloseModal={this.CloseModal} /> : ""}

        {/* Fixed position is not respected, so added margin to compensate */}
        <div className={classes.AdjustPosition} />
        <Home />
        <Projects />
        <PersonalProjects />
        <Footer />
      </main>
    );
  }
}

export default App;
