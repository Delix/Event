import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./Form"
import { getTerm} from "../../actions/term"
import {postform } from "../../actions/form";



class MainForm extends Component 
{ 
    constructor()
    {
        super();
        this.state = {
            company : {
                name:"",
                sector:"",
                form:""
            },
            dropdown: ["Facebook","Twitter","Empowaworx Website","Word of Mouth","Print Media","Other"],
            contact :  {
        
                title:"",
                name:"",
                phone:"",
                email:"",
                form:""
               },
            Form: { 
            previous :"No",
            hear: "Facebook",
            event:"",
            isComplete:false
            }
                               
        };
       
        




}

componentDidMount()
{
    this.props.getTerm();
    const {previous,hear,event,isComplete} = this.state.Form;
    const Form =  {previous,hear,event,isComplete}
    this.props.postform(Form)
    
    


}
static Proptypes = {
    
    getTerm:PropTypes.func.isRequired,
    postForm:PropTypes.func.isRequired,
    getcompany:PropTypes.func.isRequired,


}
 




   
    render() {
  
     
    
            return (
           
            
                <div>
                   
               <Form  form = {this.state}/>
                   
                </div>
            )
          }
     
    
}




export default connect(null,{  getTerm,postform})(MainForm)