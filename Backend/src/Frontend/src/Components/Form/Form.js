import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { sendform } from '../../actions/form';

function Form(props) 
{

   
    Form.proptypes =
    {
  
    sendform: PropTypes.func.isRequired
  
    };

    
    return (
        <div>
<div className="card">

     <div className="card-header">
       Company information
      </div>

      <div className = "card-body">
     
  <div className="row">

    <div className="col">
      <input type="text" name className="form-control" placeholder="Name"/>
    </div>

    <div className="col">
      <input type="text" className="form-control" placeholder="Sector"/>
    </div>
    </div>

  </div>
</div>



<br/>
{ props.form.persons.map( person =>(
    
<div key = { person.id } className="card">

     <div className="card-header">
        person {person.id}
      </div>

      <div className = "card-body">
     
  <div className="row">

  <div className="col-auto">
      <input type="text"  className="form-control" placeholder="Title"/>
    </div>

    <div className="col-4">
      <input type="text"  className="form-control" placeholder="First name"/>
    </div>

    <div className="col-4">
      <input type="text" className="form-control" placeholder="Last name"/>
    </div>
    </div>

<br/>
         
  <div className="row">

  <div className="col-4">
    <input type="text"  className="form-control" placeholder="Designation"/>
  </div>
  <div className="col-4">
    <input type="email"  className="form-control" placeholder="E-mail"/>
  </div>

  <div className="col-auto">
    <input type="tel" className="form-control" placeholder="Phone number"/>
  </div>
  </div>

  </div>

  </div>


)) }
<form>

</form>
        </div>
    )
}
export default connect(null,{sendform})(Form)

