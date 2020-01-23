import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../../Styles/CSS/login.scss';
import {authlogin} from '../../actions/auth'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

 class login extends Component {

  static proptypes = {
    isloading:PropTypes.bool.isRequired,
    error:PropTypes.array.isRequired,
    authlogin:PropTypes.func.isRequired
 };  


    render() {
         
      let errormsg = null
      if(this.props.error)
      {
      errormsg = (<p>{this.props.error.msg}</p>);
      }
     if(!this.props.error)
      {
        history.push("/");
      }  
        return (
            <div className = "Logincontianer">
           <div className = "card">
             {errormsg}
            { this.props.isloading ? 
                        <form>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                      
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                      
                       
                        <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Submit...
</button>     
                      </form>
                          
            
            :

            <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
          
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
 
          </form>

    }

</div>
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
   isloading: state.auth.loading,
   error: state.auth.error

 
 });
 
 export default connect (mapStateToProps,{authlogin})(login);
 