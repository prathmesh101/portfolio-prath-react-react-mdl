import React, { Component } from 'react';
import Jump from 'react-reveal/Jump';
 class AboutIntro extends Component{


 	render(){
 		return(
 			<div>
          <div className="row">

              <div className="about-header col-xs-12">
                  <div className="header-about-info">
                    <Jump>
                      <h3 className="header-text">About Me</h3>
                    </Jump>

                      <p className="header-para">

                      "A creator always thrives for new technologies to build things and make the world a better place."

                      <br/>I’m a creator who has a passion for design and developing software applications.<br/>

                      </p>


                  </div>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                          <circle fill="white" cx="0" cy="100" r="100" />
                          <circle fill="white" cx="200" cy="100" r="100" />
                        </svg>


          </div>
          </div>

      </div>
 		)
 	}
 }

 export default AboutIntro;
