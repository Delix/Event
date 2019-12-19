import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../Styles/CSS/n_style.scss';

 class Nav extends Component
  {
      constructor(props)
      {
          super(props)

      }
    render() {
        return (
                 <div className="navbar navbar-light bg-light">
                  <a className="navbar-brand">Event</a>
                
               
                  {
                  
                  this.props.isAuthenticated ?
               
                    <form className="form-inline">
                        
                     <Link to = "/Form_1"   className="btn btn-primary btn-lg" >View Application</Link>  
                     
                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                      </form>
                  
                  :
                  
                       <form className="form-inline">
                       <Link to ="/Login" className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</Link>
                        </form>

                  }

                  </div>
                
        )
    }
}
export default Nav
