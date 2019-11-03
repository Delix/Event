import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./Form"
import { getTerm} from "../../actions/term"
import { getnumber } from "../../actions/form"
class MainForm extends Component 
{ 
    constructor()
    {
        super();
        this.state = {
            company : {
                name:"",
                sector:"",
                hear: "Facebook"
            },
            dropdown: ["Facebook","Twitter","Empowaworx Website","Word of Mouth","Print Media","Other"],
            contact :  {
            id:-1,
            title:"",
            name:"",
            email:"",
            phone:""},
           previous :"No",
           formid : "5" 
                               
        };
       
        




}

componentDidMount()
{
    this.props.getTerm();
    this.props.getnumber(1)

}
static Proptypes = {
    
    getTerm:PropTypes.func.isRequired,
    getnumber:PropTypes.func.isRequired,

}
 




   
    render() {
  
    
    
            return (
           
            
                <div>
                   
               <Form  form = {this.state}/>
                   
                </div>
            )
          }
     
    
}





export default connect(null,{  getTerm,getnumber })(MainForm)