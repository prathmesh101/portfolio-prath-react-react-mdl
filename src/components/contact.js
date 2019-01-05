import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Button, Textfield } from 'react-mdl';
import { database } from './firebase';


function validate(email, password, message) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0,
    message: message.length === 0
  };
}



 class Contact extends Component{
   constructor(props) {
   		super(props);
   		this.state = {
   			name: '',
   			email: '',
   			message:'',
        isHidden: true
   		};

   		// bind
   		this.handleChange = this.handleChange.bind(this);
   		this.handleSubmit = this.handleSubmit.bind(this);

   	}



    handleChange(e) {
  		this.setState({
  			[e.target.name]: e.target.value
  		});
  	}

	// Handling form submit to create a new note from the state and push it to our firebase database
	handleSubmit(e){


      e.preventDefault();
      this.canBeSubmitted()


		const note = {
			name: this.state.name,
			email: this.state.email,
      message: this.state.message
		};
		database.push(note);
		this.setState({
			name: '',
			email: '',
      message:''
		});
	}

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }





  canBeSubmitted() {
     const errors = validate(this.state.name, this.state.email, this.state.message);
     const isDisabled = Object.keys(errors).some(x => errors[x]);
     return !isDisabled;
   }


 	render(){


    const errors = validate(this.state.name, this.state.email,  this.state.message);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
 		return(


 			 <div className="contact-body" >
	 			 <Grid className="contact-grid">
	 			 	<Cell col={6} className="contact-main"   align="middle">
                <div className="contact" >
                  <h3 style={{fontWeight:'600'}}>Send Message</h3>
                  <form  onSubmit={this.handleSubmit}>

                  <div className="form-group" style={{display:'block'}}>

                    <Textfield
                    className={errors.name ? "error" : ""}
                     type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleChange}

                       id="port-name"
                        aria-describedby="emailHelp"
                         placeholder="Enter name"
                    />

                  </div>

                    <div className="form-group" style={{display:'block'}}>

                      <Textfield
                       className={errors.email ? "error" : ""}
            						type="text"

            						name="email"
            						value={this.state.email}
            						onChange={this.handleChange}

                         id="email-port"
                          aria-describedby="emailHelp"
                           placeholder="Enter email"
            					/>
                    </div>
                    <div className="form-group" style={{display:'block'}}>

                      <Textfield
                       className={errors.message ? "error" : ""}
                        type="text"
                         placeholder="Enter your message here..."
                        id="message-port"
                        name="message"
                      rows={3}
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                    </div>

                    <Button type="submit" onClick={this.toggleHidden.bind(this)}  disabled={isDisabled}>
                    Submit
                    </Button >
                    {!this.state.isHidden && <Child />}
                  </form>




                </div>
	 			 	</Cell>
	 			 	<Cell col={6}   align="middle">
	 			 		<h3 style={{fontWeight:'600'}}>Contact Me</h3>
	 			 		<hr/>

	 			 		<div className="contact-list">

	 			 			<List>
						  <ListItem>
						    <ListItemContent style={{fontSize:'45px', fontFamily:'Anton'}}>
						    <i className="fa fa-phone-square" aria-hidden="true" />
						    (657) 253 - 6484
						    </ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize:'26px', fontFamily:'Anton'}}>
						    <i className="fa fa-envelope" aria-hidden="true" />
						    prathmesh.pardhiye@gmail.com
						    </ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style={{fontSize:'45px', fontFamily:'Anton'}}>
						    <i className="fa fa-skype" aria-hidden="true" />
						    prathmesh.pardhiye
						    </ListItemContent>
						  </ListItem>
						</List>


	 			 		</div>



	 			 	</Cell>
	 			 </Grid>
 			 </div>
 		)
 	}
 }

 const Child = () => (
<div className='modal'>
     Got it! I'll get back to you via email ASAP.
 </div>
)

 export default Contact;
