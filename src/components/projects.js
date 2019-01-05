import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, Dialog, DialogTitle, DialogActions, DialogContent} from 'react-mdl';


 class Projects extends Component{

 	constructor(props){
 		super(props)
 		this.state = {activeTab: 0};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

 	}
  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }




 	toggleCategories(){

 		if(this.state.activeTab === 0){
 			return(

 		<div className="projects-grid">
 			{/*Project jqeru 1*/}

      <Card shadow={0} style={{width: '450', margin: 'auto'}} className="card-main">

          <CardTitle className="projects-1-1">Brand Factory</CardTitle>
          <CardText>
          <b>
              HTML - CSS - jQuery - Bootstrap <br/> Photoshop - Agile
          </b>
          </CardText>
          <CardActions border>
              <Button colored>
              <a href="https://brandfactoryonline.com/" style={{textDecoration:'none'}}>
              Website
              </a>
              </Button>


          </CardActions>

      </Card>






			{/*Project 2 jquery*/}
 			<Card shadow={0} style={{width: '450', margin: 'auto'}}>
			    <CardTitle className="projects-1-2">Hakim Aalim</CardTitle>
			    <CardText>
          <b>
			        HTML - CSS - jQuery - Bootstrap <br/> Photoshop - Agile
          </b>
			    </CardText>
			    <CardActions border>
              <Button colored>
              <a href="http://www.hakimsaalim.com/" style={{textDecoration:'none'}}>
              Website
              </a>
              </Button>


			    </CardActions>

			</Card>

			{/*Project 3 jquery*/}
      <Card shadow={0} style={{width: '450', margin: 'auto'}}>
          <CardTitle className="projects-1-3">Hafele</CardTitle>
          <CardText>
          <b>
              HTML - CSS - jQuery - Bootstrap <br/> Photoshop - Agile
          </b>
          </CardText>
          <CardActions border>
              <Button colored>
              <a href="https://www.nagoldappliances.com/" style={{textDecoration:'none'}}>
              Website
              </a>
              </Button>


          </CardActions>
          <CardMenu style={{color: '#fff'}}>

          </CardMenu>
      </Card>
		</div>
 			)
 		} else if (this.state.activeTab === 1){
 			return(
 				<div  className="projects-grid">
        {/*Project 1 react*/}
   			<Card shadow={0} style={{width: '450', margin: 'auto'}}>
  			    <CardTitle className="projects-react-1">A show for a change</CardTitle>
  			    <CardText>
            <b>
  			        HTML - CSS - React - GitHub - Bootstrap  <br/> Figma - Asana - Agile - AWS
            </b>
  			    </CardText>
  			    <CardActions border>
  			        <Button accent onClick={this.handleOpenDialog}>Learn More</Button>
                <Dialog open={this.state.openDialog}>
                <DialogTitle>SAGE APE</DialogTitle>
                <DialogContent>
                  <p> • Creating a subscription based video application for content creators, influencers and social causes.<br/> • Designed a high fidelity wireframe using Adobe XD.<br/>  • Developing web application using React.js, AWS and PHP. <br/>  • Handling version control using git. <br/>  • Lauching and SSH changes on the server using Linux.</p>
                </DialogContent>
                <DialogActions>
                  <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
                </DialogActions>
                </Dialog>

  			    </CardActions>

  			</Card>

  			{/*Project 2 react*/}

        <Card shadow={0} style={{width: '450', margin: 'auto'}}>
            <CardTitle className="projects-react-2">Portfolio</CardTitle>
            <CardText>
            <b>
                HTML - CSS - React - GitHub - React MDL <br/> Figma - Agile - Firebase
            </b>
            </CardText>
            <CardActions border>

            <Button colored>
            <a href="https://thetypicalreviewer.wordpress.com/" style={{textDecoration:'none'}}>
            GitHub
            </a>
            </Button>

            </CardActions>

        </Card>

        </div>
 			)
 		} else if (this.state.activeTab === 2){
 			return(
        <div>
   				<div  className="projects-grid">
          {/*android 1 react*/}
       			<Card shadow={0} style={{width: '450', margin: 'auto'}}>
      			    <CardTitle className="project-android">Task List</CardTitle>
      			    <CardText>
                <b>
      			        Android Studio - Java - XML <br/> Gradle - SQLite - SDK
                </b>
      			    </CardText>
      			    <CardActions border>
                    <Button colored>
                    <a href="https://github.com/prathmesh101/Tasklist" style={{textDecoration:'none'}}>
                    GitHub
                    </a>
                    </Button>


      			    </CardActions>
      			    <CardMenu style={{color: '#fff'}}>

      			    </CardMenu>
      			</Card>

            {/*android 2 react*/}
              <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                  <CardTitle className="project-android">Mission Elapsed Time</CardTitle>
                  <CardText>
                  <b>
                      Android Studio - Java - XML <br/> Gradle - SQLite - SDK
                  </b>
                  </CardText>
                  <CardActions border>
                      <Button colored>
                      <a href="https://github.com/prathmesh101/MetAlarm" style={{textDecoration:'none'}}>
                      GitHub
                      </a>
                      </Button>


                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>

                  </CardMenu>
              </Card>

              {/*android 3 react*/}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                    <CardTitle className="project-android">RPN Calculator</CardTitle>
                    <CardText>
                    <b>
                        Android Studio - Java - XML <br/> Gradle - SDK
                    </b>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/prathmesh101/RPNCalculator" style={{textDecoration:'none'}}>
                        GitHub
                        </a>
                        </Button>


                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>
            </div>
            <div className="projects-grid-2">
            {/*android 4 react*/}
              <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                  <CardTitle className="project-android">News Reader</CardTitle>
                  <CardText>
                  <b>
                    Android Studio - Java - XML <br/> Gradle - SDK
                  </b>
                  </CardText>
                  <CardActions border>
                      <Button colored>
                      <a href="https://github.com/prathmesh101/NewsReader" style={{textDecoration:'none'}}>
                      GitHub
                      </a>
                      </Button>


                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>

                  </CardMenu>
              </Card>

              {/*android 5 react*/}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                    <CardTitle className="project-android">Student Recruit</CardTitle>
                    <CardText>
                    <b>
                        Android Studio - Java - XML <br/> Gradle - SQLite - SDK
                    </b>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/prathmesh101/StudentRecruit" style={{textDecoration:'none'}}>
                        GitHub
                        </a>
                        </Button>


                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>

                    </CardMenu>
                </Card>

                {/*android 6 react*/}
                  <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                      <CardTitle className="project-android">Run Tracker</CardTitle>
                      <CardText>
                      <b>
                        Android Studio - Java - XML <br/> Gradle - SQLite - SDK
                      </b>
                      </CardText>
                      <CardActions border>
                          <Button colored>
                          <a href="https://github.com/prathmesh101/Run-Tracker-Android" style={{textDecoration:'none'}}>
                          GitHub
                          </a>
                          </Button>


                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>

                      </CardMenu>
                  </Card>



            </div>
        </div>
 			)
 		} else if (this.state.activeTab === 3){
 			return(
 				<div  className="projects-grid">
        {/*wordpress 1*/}
          <Card shadow={0} style={{width: '450', margin: 'auto'}}>
              <CardTitle className="project-word">The Typical Reviewer</CardTitle>
              <CardText>
              <b>
                  WordPress
              </b>
              </CardText>
              <CardActions border>

              <Button colored>
              <a href="https://thetypicalreviewer.wordpress.com/" style={{textDecoration:'none'}}>
              Website
              </a>
              </Button>
              </CardActions>

          </Card>

          {/*wordpress 2 react*/}
            <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                <CardTitle className="project-square">A show for a change</CardTitle>
                <CardText>
                <b>
                  Square-space
                </b>
                </CardText>
                <CardActions border>
                    <Button colored>
                    <a href="https://ashowforachange.com/" style={{textDecoration:'none'}}>
                    Website
                    </a>
                    </Button>


                </CardActions>

            </Card>
        </div>
 			)
 		}

 	}


 	render(){
 		return(
 			<div className="category-tabs">
 			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
 			<Tab>jQuery</Tab>
 			<Tab>React</Tab>
 			<Tab>Android</Tab>
 			<Tab>WordPress / Square Space</Tab>
 			</Tabs>


 			<Grid >
 			<Cell col={12}>
 				<div className="content">{this.toggleCategories()}</div>
 			</Cell>
 			</Grid>


 			</div>
 		)
 	}
 }

 export default Projects;
