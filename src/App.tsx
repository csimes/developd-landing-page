import React, { Component } from 'react';
import github from './assets/github-circle.svg';
import linkedin from './assets/linkedin-circle.svg';
import instagram from './assets/instagram-circle.svg';
import './App.css';
import ContactForm from "./components/ContactForm";

class App extends Component {
  render() {
    return (
    <div className='hero'>
      <div>
        <div className="intro">
            <h1>Hey, I'm </h1><h1 className="name">Cherron!</h1>
              <h1>Web Developer and owner of</h1> <h1 className="name">developd.</h1>
        </div>
     </div>
        <div className="socials-group">
          <a href="https://github.com/csimes"><img className="social" src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/cherron-simes-1b016614b"><img className="social" src={linkedin} alt="" /></a>
          <a href="https://www.instagram.com/chocolithunda"><img className="social" src={instagram} alt="" /></a>
        </div>
         <ContactForm />
    </div>
    );
  }
}

export default App;
