import React,{Component} from 'react';
import { FooterSection, FooterLinkList, Footer } from 'react-mdl';

class FooterMain extends Component{
	render(){
		return(
      <div>
            <Footer size="mini">
                <FooterSection type="left" logo="© | Prathmesh Pardhiye">


                </FooterSection>
                <FooterSection type="right">
                    <FooterLinkList>
                      	  <i className="fa fa-facebook-square" aria-hidden="true" />
													<i className="fa fa-linkedin-square" aria-hidden="true" />
														<i className="fa fa-github-square" aria-hidden="true" />

                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </div>

		)
	}

}

export default FooterMain;
