import React, { Component } from 'react'
import '../CSS/qform_style.scss';

export default class Questionform extends Component {
    render() {
        return (
            
             <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">  Please select one of following type of Booking</p>
  <hr className="my-4"/>
  <div className="container">
  <div className="row">
    <div className="col">   
  <a className="btn btn-primary btn-lg" href="#" role="button">Single Booking</a>
    </div>
    <div id = "line" className = "my-4" ></div>
    <div className="col">
  <a className="btn btn-primary btn-lg" href="#" role="button">Group Booking</a>
    </div>
  </div>
</div>
</div>
        )
    }
}
