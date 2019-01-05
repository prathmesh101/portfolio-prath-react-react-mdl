import React,{Component} from 'react';

import {Grid, Cell} from 'react-mdl';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import diamond from '../img/diamond.png';
import stat from '../img/stationary.png';
import heart from '../img/heart.png';


class MainVideo extends Component{
	render(){
		return(
      <div className="my-info">
      <Grid className="my-info-logo">
        <Cell col={4}>
          <img src= {diamond} alt="diamond"/>
					<Slide left>
          <h6>Flawless Apps</h6>
					</Slide>
        </Cell>
        <Cell col={4}>
          <img src= {stat} alt="diamond"/>
						<Zoom  bottom>
            <h6>Perfect Code</h6>
						</Zoom>
        </Cell>

        <Cell col={4}>
          <img src= {heart} alt="diamond"/>
						<Slide right>
            <h6>Built With Love</h6>
						</Slide>
        </Cell>

          <hr style={{borderTop:'1px solid white', width:'50%', marginLeft:'auto', marginRight:'auto'}} />


     </Grid>

      <Grid className="my-description">

        <Cell col={6} style={{textAlign:'end'}}>
							<Slide left >
              <h6>Hi. I’m Prath, a software developer<br/>
                 from Fullerton, California.<br/>
                 Please take a look around!</h6>
							</Slide>
        </Cell>

        <Cell col={6} style={{textAlign:'start'}}>
				<Slide right>
				<p>I am passionate about building excellent software that improves others life.<br/>
				 I specialize in creating software applications for clients with great technical,<br/>
				 development, designing and communication skills.I strive to enhance <br/>
				  designing as well as development skills and improve the lives of those around me.<br/>
					 Currently looking for full time anywhere in United States.</p>

					</Slide>


        </Cell>
     </Grid>
     </div>

		)
	}

}

export default MainVideo;
