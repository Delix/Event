import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from "./Form"

class MainForm extends Component 
{ 
    constructor()
    {
        super();
        this.state = {
            persons : [],
            company : {
                name:"",
                sector:"",
                hear: ""
            },
           contact : "",
           previous :"",
           formid : "5" 
                               
        };

        
    for (let i = 0; i < 5; i++)
    {
      let person =  {
           id: i,
           title:"",
           firstName:"",
           lastName:"",
           designation:"",
           email:"",
           phone:"",
           date:""
           };
      this.state.persons.push(person);
    }

    


}




static Proptypes = {

    event: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
}
 


    
   


   
    render() {
        return (

            
            <div>
                <Form form = {this.state}/>
               
            </div>
        )
    }
}

    
const mapStateToProps = state => ({
    number: state.form.Number,
    event: state.event.Event

});

export default connect(mapStateToProps)(MainForm)