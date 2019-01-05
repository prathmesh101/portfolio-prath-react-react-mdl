import React,{Component} from 'react';
import ha from '../img/ha-logo.png';
import brand from '../img/bb.png';
import show from '../img/show-main.png';
import hafele from '../img/hafele.png';
import sage from '../img/sage-ape.png';
import qMe from '../img/qme.png';
import {Grid, Cell, Button} from 'react-mdl';

class LandingProject extends Component{


	render(){
		return(  <div className="projects-landing">
        <div className="genre-head">

            <h2 style={{fontFamily:'Montserrat'}}><b>Projects</b></h2>
        </div>
        <br />

				<Grid noSpacing className="project-list-1">
	        <Cell col={4}>
					<div className="cont-top">
					<img src={show} alt="Avatar" className="image-projects" />
						<div className="overlay-projects-top">
							<div className="text-projects-top">
								<h6><b>A show for a change</b></h6>
								<p>Designed, Developed and maintaining website using square space and Figma.</p>
								<Button raised>
									<a href="https://ashowforachange.com/" style={{textDecoration:'none', color:'white'}}>
									Visit Site
									</a>
								</Button>
							</div>

						</div>
						</div>
					</Cell>
	        <Cell col={4}>
					<div className="cont-top">
					<img src={sage} alt="Avatar" className="image-projects"/>
						<div className="overlay-projects-top">
							<div className="text-projects-top">
							<h6><b>Sage Ape</b></h6>
							<p>Designed a high fidelity wireframe using XD and developing video streaming web app using React.js, AWS, PHP.</p>
							<Button raised>
								<a href="https://dev.sageape.com/" style={{textDecoration:'none', color:'white'}}>
								Visit Site
								</a>
							</Button>
							</div>
						</div>
						</div>
					</Cell>
	        <Cell col={4}>
					<div className="cont-top">
					<img src={qMe} alt="Avatar" className="image-projects" />
						<div className="overlay-projects-top">
							<div className="text-projects-top">
							<h6><b>QmeIn</b></h6>
							<p>Developed a client and merchant side responsive web application using Mongo DB, Express and Vanilla.Js.</p>
							<Button raised>
									<a href="https://github.com/prathmesh101/QmeIn" style={{textDecoration:'none', color:'white'}}>
									Visit GitHub
									</a>
							</Button>
							</div>
						</div>
						</div>
						</Cell>
	    	</Grid>
				<Grid noSpacing className="project-list-2">
	        <Cell col={4}>
					<div className="cont-bot">
					<img src={ha}  alt="Avatar" className="image-projects" />
						<div className="overlay-projects-bottom">
							<div className="text-projects-bottom">
							<h6><b>Hakim Aalim</b></h6>
							<p>Developed UI using HTML, CSS, Bootstrap, jQuery for a hair saloon based on design components.</p>
							<Button raised>
							<a href="http://www.hakimsaalim.com/" style={{textDecoration:'none', color:'white'}}>
								 Visit Site
							</a>
							</Button>
							</div>
						</div>
						</div>
					</Cell>
	        <Cell col={4}>
					<div className="cont-bot">
					<img src={brand} alt="Avatar" className="image-projects" />
						<div className="overlay-projects-bottom">
							<div className="text-projects-bottom">
							<h6><b>Brand Factory</b></h6>
							<p>Developed UI using HTML, CSS, Bootstrap, jQuery for a clothing brand based on design components.</p>
							<Button raised>
							<a href="https://brandfactoryonline.com/" style={{textDecoration:'none', color:'white'}}>
									Visit Site
							</a>
							</Button>
							</div>
						</div>
						</div>
					</Cell>
	        <Cell col={4}>
					<div className="cont-bot">
					<img src={hafele} alt="Avatar" className="image-projects" />
						<div className="overlay-projects-bottom">
							<div className="text-projects-bottom">
							<h6><b>Hafele</b></h6>
							<p>Developed UI using HTML, CSS, Bootstrap, jQuery for launching new appliances based on design components.</p>
							<Button raised>
									<a href="https://www.nagoldappliances.com/" style={{textDecoration:'none', color:'white'}}>
									Visit Site
									</a>
							</Button>

							</div>
						</div>
						</div>
					</Cell>
	    	</Grid>
			</div>
		)
	}

}

export default LandingProject;
