import React, { Component } from 'react';
import videoJPG from '../assets/video/We-Work-We-Wait.jpg';
import videoWebm from '../assets/video/We-Work-We-Wait.webm';
import videoMp4 from '../assets/video/We-Work-We-Wait.mp4';
import videoOgv from '../assets/video/We-Work-We-Wait.ogv';
import '../css/landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="center-align landing">
          <h1>EMAILY</h1>
          <h5>Collect email survey feedback from your users!</h5>
        </div>
        <div className="fullscreen-bg">
          <video loop muted autoPlay poster={videoJPG} className="fullscreen-bg__video">
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
            <source src={videoOgv} type="video/ogg" />
          </video>
        </div>
      </div>
    );
  }
}

export default Landing;
