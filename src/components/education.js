import React,{ Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Education extends Component{
	render(){
		return(
			<Grid>
			<Cell col={4}>
				<p><b>{this.props.startYear} - {this.props.endYear}</b></p>
			</Cell>
			<Cell col={8}>
				<h5 style={{marginTop:'0px'}}>{this.props.schoolName}</h5>
				<p>{this.props.schoolDescription}</p>
			</Cell>
			</Grid>

			)
	}
}

export default Education;