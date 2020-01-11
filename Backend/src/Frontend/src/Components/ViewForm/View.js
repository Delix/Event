import React from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';


function View(props)
 {
    const history = useHistory();

    const viewform = (form) =>
    {
      
      

    }
    
    return (
        <div>
    <ul class="list-group list-group-flush">     
      { props.forms.map( form =>(
      <div>
      <li class="list-group-item">
          {forms.event}
        <button type="button" onClick = {() => viewform(form)}  class="btn btn-lg btn-primary">View Form</button>
      </li>
      </div>
      ))}
       </ul> 
        </div>

    )
}
const mapStateToProps = state => ({
  forms:state.form.forms


});
export default connect(mapStateToProps,)(View)