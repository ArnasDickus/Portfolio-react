import React, { Component } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import classes from "./App.module.scss";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Fixed position is not respected, so added margin to compensate */}
        <div className={classes.AdjustPosition} />
        <Home />
        <Projects />
        {/* <h1 style={{ marginBottom: "50.3125rem" }}>This is App.js</h1> */}
      </div>
    );
  }
}

export default App;
