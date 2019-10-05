import PropTypes from 'prop-types';
import React, { Component } from 'react'
import '../CSS/f_style.scss';
import { connect } from 'react-redux';
import { getcon }  from '../../actions/contact';

class Footer extends Component {
 

  static proptypes = {
      contact:PropTypes.array.isRequired
  };  
  

  componentDidMount()
  {
      this.props.getcon();
  }
  



    render() {
        return (
            <footer>
                   { this.props.con.map( contact =>(
                      
                      
                      <div key = { contact.id } className="container">
                        <div>
                        <h4 className="lead">Address</h4>
                        <p>{ contact.Address }</p>
                        </div>
                        <div>
                        <h4 className="lead">E-mail</h4>
                        <p>{ contact.email }</p>
                        </div>
                        <div>
                        <h4 className="lead">Telephone</h4>
                        <p>{ contact.Call }</p>
                        </div>

                    
                      </div>
                 
              
                 
                      
                    
    
                        )) }

<div className ="Container2">

                <div>
                <a href="#" className="fa-facebook"></a>
                </div>

                <div>
                 <a href="#" className="fa-twitter"></a>
                 </div>

                 <div>
                 <a href="#" className="fa-youtube"></a>
                 </div>
                 
                 <div>
                 <a href="#" className="fa fa-instagram"></a>
                 </div>
    </div>

                </footer>
            
        )
    }
}
    
const mapStateToProps = state => ({
    con: state.contact.contact
});

export default connect(mapStateToProps,{ getcon })(Footer);
