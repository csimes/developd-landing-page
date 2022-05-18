import React, { Component } from "react";
import github from "./assets/github-circle.svg";
import linkedin from "./assets/linkedin-circle.svg";
import logo from "./assets/transparent.png";
import "./App.css";
import ContactForm from "./components/ContactForm";

class App extends Component {
  onEmailClick() {
    window.open("mailto:cherron@developdbycherron.com?subject=Hi Cherron!");
  }

  render() {
    return (
      <div className="hero">
        <div className="intro">
          <img className="logo" src={logo} alt="" />
          <h1>Hey, I'm </h1>
          <h1 className="name">Cherron!</h1>
          <h1>Web Developer and owner of</h1>{" "}
          <h1 className="name">developd.</h1>
          <h3 className="info">
            I'm currently working on rebuilding my website (from scratch), but
            feel free to reach out and connect on social. You can enter your
            email below so you know when my site is ready!
          </h3>
        </div>
        <div className="socials-group">
          <a href="https://github.com/csimes" target="_blank" rel="noreferrer">
            <img className="social" src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/cherron-simes-1b016614b"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social" src={linkedin} alt="" />
          </a>
        </div>
        <ContactForm />
      </div>
    );
  }
}

export default App;
