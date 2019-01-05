import React, { Component } from 'react';
import { Grid, Cell} from  'react-mdl';
import Education from './education';
import Experience from './experience';
import Me from '../img/prath.jpg';

 class Resume extends Component{
 	render(){
 		return(
 			<div className="resume-main">
 				<Grid>
 				<Cell col={4}>

 					<div style={{textAlign:'center'}}>
 					<img
 					src={Me}
 					alt="avatar"
 					style={{height:'230px', borderRadius:'50%', width:'50%'}}/>
 					</div>


 					<h2 style={{paddingTop:'1em'}}>Prathmesh Pardhiye</h2>
 					<h4 style={{color:'grey'}}>Developer</h4>
 					<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
 					<p>Determined Software Engineer with great technical, problem solving, communication skills and experience of developing user interface applications with Full Stack technology using Node.js. Experience developing supervised and unsupervised android application using Android Studio. Proficient in Full Stack and Android Development.</p>

 					<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>

 					<h5>Address</h5>
 					<p>CA, United States</p>
 					<h5>Phone</h5>
 					<p>(657) 253 - 6484</p>
 					<h5>Email</h5>
 					<p>prathmeh.pardhiye@gmail.com </p>
 					<h5>Web</h5>
 					<p>5MinuteReview</p>
					<hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>



 				</Cell>
 				<Cell className="resume-right-col" col={8}>

 					<h2>Education</h2>

          <Education
 						startYear={2016}
 						endYear={2018}
 						schoolName="Cal State Fullerton - Master's in Computer Science"
 						schoolDescription="Developed a full stack application using node, express.js, handlebars and mongoDB to replace queue's in DMV with virtual. Developed Android applications using Android studio with languages like Java, XML and SQLite."
 					/>

 					<Education
 						startYear={2012}
 						endYear={2015}
 						schoolName="Mumbai University - Bachelor's in Computer Engineering"
 						schoolDescription="Developed a software application using NetBeans to monitor performance for translators. Developed a software application using Virtual Basics to monitor and apply effects on images."
 					/>



 					<hr style={{borderTop:'3px solid #e22947'}} />

 					<h2>Experience</h2>

 					<Experience
 						startYear={2018}
 						endYear="Present"
 						jobName="A show for a change - Front End Developer/Designer"
 						jobDescription="Designed and wireframed a high fidelity mock up using Figma for a subscription based video application. Developing a web responsive application using React, Bootstrap and AWS for streaming videos and handling user data. Version control using git."
 					/>

          <Experience
            startYear={2015}
            endYear={2016}
            jobName="Ideate Labs - Front End Developer"
            jobDescription="Worked on three web applications for clients, optimized the code, collaborated with design team and technical team for look and feel of the website, performed unit test and UX test, created emailers for client, handled browser compatibility using HTML5, CSS, JavaScript, jQuery, Photoshop"
          />

 					<hr style={{borderTop:'3px solid #e22947'}} />


 				</Cell>

 				</Grid>

 			</div>
 		)
 	}
 }

 export default Resume;
