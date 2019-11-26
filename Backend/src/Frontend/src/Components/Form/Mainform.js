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
                name:"",
                sector:""
            },
            dropdown: ["Facebook","Twitter","Empowaworx Website","Word of Mouth","Print Media","Other"],
            contact :  {
        
                title:"",
                name:"",
                email:"",
                phone:""},
            Form: { 
           contact:"",
           attendee:"",
           previous :"No",
           hear: "Facebook",
           Event:""

            }
                               
        };
       
        




}

componentDidMount()
{
    this.props.getTerm();
    


}
static Proptypes = {
    
    getTerm:PropTypes.func.isRequired


}
 




   
    render() {
  
     
    
            return (
           
            
                <div>
                   
               <Form  form = {this.state}/>
                   
                </div>
            )
          }
     
    
}




export default connect(null,{  getTerm })(MainForm)