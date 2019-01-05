import React,{Component} from 'react';

import { Cell, Grid } from 'react-mdl';
import { Link } from 'react-router-dom';

class LandingAboutContact extends Component{
	render(){
		return(
      <div className="about-contact-page">

      <Grid noSpacing className="about-contact-part-landing">

        <Cell col={6} className="about-part-landing align-center-aboutcontact">
						<Link to="/resume" style={{fontFamily:'Montserrat', textDecoration:'none', color:'white', fontWeight:'500'}} >
			          <div className="box" >
								Resume
								</div>
							</Link>
        </Cell>

        <Cell col={6} className="contact-part-landing align-center-aboutcontact">

					<Link to="/contact" style={{fontFamily:'Montserrat', textDecoration:'none', color:'white', fontWeight:'500'}}>
							<div className="box">
							Contact Me
							</div>
					</Link>


        </Cell>

     </Grid>

     </div>




		)
	}

}

export default LandingAboutContact;
