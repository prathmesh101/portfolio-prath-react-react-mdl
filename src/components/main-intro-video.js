import React,{Component} from 'react';
import Flip from 'react-reveal/Flip';
import main from '../img/back.mp4';
import { Layout } from 'react-mdl';
class MainIntroVideo extends Component{
	render(){
		return(
      <div>
		      <div className="background-video-content">
								<Layout>

										<video loop muted autoPlay
																			className="backgrnd-video"
																			style={{objectFit: 'cover', width:'100%', height:'inherit'}}
																			src={main}
																			type="video/mp4"/>
												<div className="main-introduction-content">
									         <div className="main-intro-text">
													 		<Flip carousel>
						             	    <h1 style={{wordSpacing:'30px'}}><b>NOT AN</b> </h1>
															<h1 style={{lineHeight:'1.15'}}><b>AVERAGE </b></h1>
															<h1><b>DEVELOPER</b></h1>
															</Flip>
					                 </div>
												</div>
								</Layout>

		      </div>
        </div>

		)
	}

}

export default MainIntroVideo;
