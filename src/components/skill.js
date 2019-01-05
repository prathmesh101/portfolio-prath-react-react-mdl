import React, {Component} from 'react';






class Skill extends Component{




constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 1000);
  }


	render(){

		const { collapsed } = this.state;
		const { hue, saturation, skills } = this.props;

		return(



			<div id="skill-main" className={`container ${collapsed ? 'collapsed' : ''}`}>
	        <h1 style={{fontWeight:'500'}}>Skills</h1>

	        <ul className="skills">
	          {skills.map((skill, index) =>
	            <li
	              key={skill.type}
	              style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
	            >
	              <p>{skill.type}<span>{skill.level}</span></p>
	            </li>
	          )}
	        </ul>
	      </div>


			)
	}
}

export default Skill;
