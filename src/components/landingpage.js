import React, { Component } from 'react';

import BackgroundVideo from './main-intro-video';
import Myinfo from './my-info-land';
import Projects from './landing-projects';
import About from './landing-about-contact';
import Footer from './footer';


 class Landing extends Component {


 	render() {
 		return(
      <div>
      <BackgroundVideo />
      <Myinfo />
      <Projects />
      <About />
      <Footer />

       </div>


 		)
 	}
 }

 export default Landing;
