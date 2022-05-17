import React, { Component } from 'react';
import github from './assets/github-circle.svg';
import linkedin from './assets/linkedin-circle.svg';
import instagram from './assets/instagram-circle.svg';
import email from './assets/email-circle.svg';
import logo from './assets/transparent.svg';
import './App.css';
import ContactForm from './components/ContactForm';

class App extends Component {
  onEmailClick() {
    window.open('mailto:cherron@developdbycherron.com?subject=Hi Cherron!');
  }

  render() {
    return (
      <div className='hero'>
        <img className='logo' src={logo} alt='' />
        <div className='intro'>
          <h1>Hey, I'm </h1>
          <h1 className='name'>Cherron!</h1>
          <h1>Web Developer and owner of</h1>{' '}
          <h1 className='name'>developd.</h1>
          <p className='info'>
            I'm currently working on rebuilding my website (from scratch), but
            feel free to reach out and connect on social. You can enter your
            email below so you know when my site is ready!
          </p>
        </div>
        <div className='socials-group'>
          <a href='https://github.com/csimes' target='_blank' rel='noreferrer'>
            <img className='social' src={github} alt='' />
          </a>
          <a
            href='https://www.linkedin.com/in/cherron-simes-1b016614b'
            target='_blank'
            rel='noreferrer'
          >
            <img className='social' src={linkedin} alt='' />
          </a>
          <a
            href='https://www.instagram.com/chocolithunda'
            target='_blank'
            rel='noreferrer'
          >
            <img className='social' src={instagram} alt='' />
          </a>
          <a
            href='mailto:cherron@developdbycherron.com?subject=Hi Cherron!'
            onClick={() =>
              (window.location.href =
                'mailto:cherron@developdbycherron.com?subject=Hi Cherron!')
            }
            target='_blank'
            rel='noreferrer'
          >
            <img className='social' src={email} alt='' />
          </a>
        </div>
        <ContactForm />
      </div>
    );
  }
}

export default App;
