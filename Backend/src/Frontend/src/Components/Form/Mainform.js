import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./Form"
import { getTerm} from "../../actions/term"



class MainForm extends Component 
{ 
    constructor()
    {
        super();
        this.state = {
            company : {
                name:null,
                sector:null
            },
            dropdown: ["Facebook","Twitter","Empowaworx Website","Word of Mouth","Print Media","Other"],
            contact :  {
                title:null,
                name:null,
                phone:null,
                user: null
               },
            Form: { 
            previous :"No",
            hear: "Facebook",
            event:null,
            attendees: null
            }
                               
        };
       





}


static Proptypes = {
    
    getTerm:PropTypes.func.isRequired,
    postForm:PropTypes.func.isRequired,
    getcompany:PropTypes.func.isRequired,


}

componentDidMount()
{
    getTerm();
}
 




   
    render() {
  
     
    
            return (
           
            
                <div>
                   
               <Form  form = {this.state}/>
                   
                </div>
            )
          }
     
    
}




export default connect(null,{  getTerm})(MainForm)