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
                hear: ""
            },
            dropdown: ["Facebook","Twitter","Empowaworx Website","Word of Mouth","Print Media","Other"],
            contact : "",
           previous :"",
           formid : "5" 
                               
        };
       
        




}

componentDidMount()
{
    this.props.getTerm();
    this.props.getnumber(5)

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