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
                               
        };
       
        




}

componentDidMount()
{
    this.props.getTerm();


}
static Proptypes = {
    
    getTerm:PropTypes.func.isRequired,
    persons:PropTypes.array.isRequired


}
 




   
    render() {
  
     
    
            return (
           
            
                <div>
                   
               <Form  form = {this.state}/>
                   
                </div>
            )
          }
     
    
}


const mapStateToProps = state => ({
    persons: state.form.persons

});



export default connect(mapStateToProps,{  getTerm })(MainForm)