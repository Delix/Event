import PropTypes from 'prop-types';
import React, { Component } from 'react'
import '../../Styles/CSS/f_style.scss';
import { connect } from 'react-redux';
import { getcon }  from '../../actions/contact';
import { getsocial } from '../../actions/social';

class Footer extends Component {
 

  static proptypes = {
    getcon:PropTypes.func.isRequired,
    getsocial:PropTypes.func.isRequired,
    contact:PropTypes.array.isRequired,
    ssocials:PropTypes.array.isRequired
  };  
  

  componentDidMount()
  {
      this.props.getcon();
      this.props.getsocial();
    
  }
  



    render() {
        return (
            <footer>
              <div className = "row">
                <div className = "col">
                   { this.props.con.map( contact =>(
                      
                      
                      <div key = { contact.id } className="container">
                        <div>
                        <h4 className="lead">Address</h4>
                        <p>{ contact.address }</p>
                        </div>
                        <div>
                        <h4 className="lead">E-mail</h4>
                        <p>{ contact.email }</p>
                        </div>
                        <div>
                        <h4 className="lead">Telephone</h4>
                        <p>{ contact.call }</p>
                        </div>

                    
                      </div>
                 
              
                 
                      
                    
    
                        )) }

                        </div>
                        </div>
    <div className = "row">
  
    { this.props.socials.map( social=>(
                      
                      
                      <div key = { social.id } className="col-auto">
                      
                      <a href= { social.link } className= { social.name }></a>
                    
                      </div>
                 
              
                 
                      
                    
    
                        )) }
                 

                   </div>
                </footer>
            
        )
    }
}

const mapStateToProps = state => ({
    con: state.contact.contact,
    socials:state.social.socials
});

export default connect(mapStateToProps,{ getcon,getsocial })(Footer);
