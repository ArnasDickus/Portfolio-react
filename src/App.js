import React, { Component } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import classes from "./App.module.scss";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";
import PersonalProjects from "./Sections/PersonalProjects/PersonalProjects";
import Footer from "./Sections/Footer/Footer";
/*
  Things to add:
  1) Create a footer DONE
  2) Add functionality for Get in Touch button.
  3) Add functionality for navbar links, and aside menu links.
  4) Add Identical sizes photos to Project slideshow.
  5) Improve text size for projects section, and add more buttons.
  6) Add hamburger animation.
  7) Add aside menu appearing animation.
  8) Add home screen text animation.

  Bonus:
  1) Add improvement section. Questionable
*/
class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
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
