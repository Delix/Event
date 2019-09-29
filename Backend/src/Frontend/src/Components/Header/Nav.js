import React, { Component } from 'react'
import '../CSS/n_style.scss';

 class Nav extends Component {
    render() {
        return (
                 <div className="navbar navbar-light bg-light">
                  <a className="navbar-brand">Event</a>
                
 

                  <form className="form-inline">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                   </form>

                  </div>
        
        )
    }
}
export default Nav
