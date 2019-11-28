import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./Form"
import { getTerm} from "../../actions/term"
import { getcompany } from '../../actions/form';


class MainForm extends Component 
{ 
    constructor()
    {
        super();
        this.state = {
            company : {
                company:"",
                sector:""
            },
            dropdown: ["Facebook","Twitter","Empowaworx Website","Word of Mouth","Print Media","Other"],
            contact :  {
        
                title:"",
                name:"",
                phone:"",
                email:""
               },
            Form: { 
            previous :"No",
            hear: "Facebook",
            event:"",
           attendee:"",
           company:"",
           contact:""
           
          
        
       

            }
                               
        };
       
        




}

componentDidMount()
{
    this.props.getTerm();
    this.props.getcompany();
    
    


}
static Proptypes = {
    
    getTerm:PropTypes.func.isRequired,
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




export default connect(null,{  getTerm,getcompany })(MainForm)