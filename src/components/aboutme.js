import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import SkillBars from './skill';
import Fade from 'react-reveal/Fade';
import Footer from './footer';
import AboutIntro from './about-intro';
import prof from '../img/about-prof.png';

const SKILLS = [
{type: "HTML", level: 90},
{type: "CSS", level: 80},
{type: "JavaScript", level: 70},
{type: "jQuery", level: 70},
{type: "BootStrap", level: 80},
{type: "Node.js", level: 50},
{type: "React.js", level: 80},
{type: "Figma", level: 80},
{type: "Adobe XD", level: 70},
{type: "Photoshop", level: 60},
{type: "Android Studio", level: 80},
{type: "Java", level: 80},
{type: "SQL", level: 70},
{type: "AWS", level: 70},
{type: "Git", level: 80},

];

 class About extends Component{
   componentDidMount() {
  this.setState(window.scrollTo(0, 0));
}


 	render(){
 		return(
 			<div>
          <AboutIntro />


          <Grid className="demo-grid-2" >
              <Cell col={6} align="middle">
              <h2 className="header-skills-about">Prath Pardhiye</h2>

              <img
                src={prof}
                alt="avatar"
                style={{height:'250px'}}
                />
                  <Fade bottom>
                <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}>I am a software creator enthusiast as you may have noticed. I search for new devices, technologies and implement them in daily life which makes my life efficient (TRIVIA: 'Smart mirror'). I love blogging and sharing my experiences with creators. I have written blogs regarding software development and lifestyle. I have expertise in website and app development.<br/> <b>What would you do if you had a software developer available?</b></p>
              </Fade>



              </Cell>

              <Cell col={6} className="skills-section-about">
              <Fade right>
              <SkillBars hue="300" saturation="40" skills={SKILLS} />
              </Fade>


              </Cell>
          </Grid>

          <Grid  noSpacing className="div-main-all-stats">

              <Cell col={4} className="main-section-about-second">
              <Fade  bottom>
              <h3 className="head-about-second"><span style={{color: '#cccccc'}}>01.</span>Research</h3>
              <p className="para-about-second">Understanding the topic intimately by becoming familiar with the subject matter indepth and build on information related to it. Decide techniques to address the explicit client needs and requirements of the product.</p>
              </Fade>
              </Cell>

              <Cell col={4} className="main-section-about-second">
              <Fade  bottom>
              <h3 className="head-about-second"><span style={{color: '#cccccc'}}>02.</span>Design</h3>
              <p className="para-about-second">A cross functional process that includes market research, development research, structure  of design, prototype or MVP. A shallow appearance of a product, design actually envelops a lot more and guides in improving the functionalties.</p>
              </Fade>
              </Cell>

              <Cell col={4} className="main-section-about-second">
              <Fade  bottom>
              <h3 className="head-about-second"><span style={{color: '#cccccc'}}>03.</span>Develop</h3>
              <p className="para-about-second">Discoveries from the research and design phases are used for the development of specific items including frameworks, techniques and materials.  Engineer using the research and design to create commercial items for the client.</p>
              </Fade>
              </Cell>

          </Grid>
          <Footer />


      </div>
 		)
 	}
 }

 export default About;
