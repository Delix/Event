import React from 'react';
import {connect} from 'react-redux';
import "../CSS/form_style.scss"
import PropTypes from 'prop-types';
import {sendform,createAttendee,createCompany,createContact} from '../../actions/form';



function Form(props) 
{
 

    Form.proptypes =
    {
 
     createAttendee:PropTypes.func.isRequired,
     createCompany:PropTypes.func.isRequired,
     createContact:PropTypes.func.isRequired,
    sendform: PropTypes.func.isRequired,
    event: PropTypes.number.isRequired,
    terms: PropTypes.array.isRequired,
    persons: PropTypes.array.isRequired,
    attendees:PropTypes.array.isRequired,
    company:PropTypes.number.isRequired,
    contact:PropTypes.number.isRequired,
    companies:PropTypes.array.isRequired,
  
    };

  const attendeesinfo = (e,id) =>
    { 
        e.preventDefault();
        
        switch(e.target.name)
{
case "title":  
if(id != -1)
{

props.persons[id].attendee.title = e.target.value;
}
else
{
  
  props.form.contact.title = e.target.value;
}
   break;    
case "phone":
  if(id != -1)
  {
     props.persons[id].attendee.phone = e.target.value;
  }
  else
  {
    props.form.contact.phone = e.target.value;
  }
    break;
     
case "Fname":
    
        props.persons[id].attendee.name = e.target.value    ;
        break; 
case "mail":
  if(id != -1)
  {
  
    props.persons[id].attendee.email = e.target.value;
  }
else
{

  props.form.contact.email = e.target.value;
  
}
    break;

case "name":
  props.form.contact.name = e.target.value;
  break;
case "Designation":
    
    props.persons[id].attendee.designation = e.target.value ;
     break; 

     case "company":
    
    props.form.company.company = e.target.value ;
     break; 
     case "sector":
    
    props.form.company.sector = e.target.value ;
     break; 
     case "hear":
             let textfield = document.getElementById("newField1");
           
       if(e.target.value == "Other")
       { 
         
           if(window.getComputedStyle(textfield).display  === "none" )
           {
               textfield.style.display = "block";
           }
           else
           {
               props.form.Form.hear = e.target.value;
           }

       }
       else
       {
        if(window.getComputedStyle(textfield).display  === "block" )
        {
            textfield.style.display = "none";

        }
        
            props.form.Form.hear = e.target.value;
    
       }
       
     break; 
     case "previous":
         
             textfield = document.getElementById("newField2");;
     
            if(e.target.value == "Yes")
            { 
              
                if(window.getComputedStyle(textfield).display  === "none" )
                {
                    textfield.style.display = "block"
                }
                else
                {
                    props.form.Form.hear = e.target.value;
                }
     
            }
            else
            {
             if(window.getComputedStyle(textfield).display  === "block" )
             {
                 textfield.style.display = "none";
                 
             }
             
                 props.form.Form.hear = e.target.value;
         
            }
             break; 

        }
      
    
      
    }

  const submitform = (e) =>
  {
    e.preventDefault();
    props.Companies.map(company =>{
      if(company.company.toUpperCase().includes(props.form.company.company.toUpperCase()))
      {
         return props.form.Form.company = company.id
      }

    });
   
    if(props.form.Form.company == "")
    {
        const {company,sector} = props.form.company;
        const Company = {company,sector};
        props.createCompany(Company);
    }
    
  
    if(props.persons.length === 1)
    {
     
     
      props.form.contact.title= props.persons[0].attendee.title;
      props.form.contact.name= props.persons[0].attendee.name;
      props.form.contact.email= props.persons[0].attendee.email;
      props.form.contact.phone = props.persons[0].attendee.phone;
      const {title,name,email,phone} = props.form.contact;
      const contact =  {title,name,email,phone}
      props.createContact(contact);
    }
    else
    {
      const {title,name,email,phone} = props.form.contact;
      const contact =  {title,name,email,phone}
      props.createContact(contact);
    }
     props.createAttendee(props.persons);
     props.form.Form.company =  props.company.id;
     props.form.Form.attendee = props.attendees.id;
     props.form.Form.event = props.esvent;
     props.form.Form.contact=  props.contact.id;
        console.log(props.form.Form);
   // props.sendform(props.form.Form)
  
  }

    
    return (
        <div className = "formContainer">
          <form autocomplete="off"  onSubmit = {(e) => submitform(e)} >
<legend>Company information</legend>         
<div className="card">
      <div className = "card-body">

  <div className="row">

    <div className="col">
      <input type="text" onChange = { (e) => attendeesinfo(e,0)} name ="company" className="form-control" placeholder="Name" required/>
    </div>

    <div className="col">
      <input type="text" className="form-control" onChange = { (e) => attendeesinfo(e,0)} name ="sector" placeholder="Sector" required/>
    </div>
    </div>
   
  </div>

</div>

{props.persons.length != 1 &&

  <div id = "formContianer1">
  
  <legend>Point of contact</legend>
  <div className = "card">

<div className ="card-body">
    

<div className = "row">
<div className="col-4">
      <input type="text"  onChange = { (e) => attendeesinfo(e,-1) }    className="form-control" name= "Title"placeholder="Title" required/>
    </div>

  <div className="col-4">
      <input type="text"  onChange = { (e) => attendeesinfo(e,-1) }    className="form-control" name= "name"placeholder="Full name" required/>
    </div>

    <div className="col-4">
      <input type="email"     onChange = { (e) => attendeesinfo(e,-1) }  className="form-control" name = "mail" placeholder="E-mail" required/>
     </div>

     </div>
     <br/>
<div className = "row">
   <div className="col-4">
      <input type="tel"  onChange = { (e) => attendeesinfo(e,-1) }    className="form-control" name= "Phone"placeholder="Phone" required/>
    </div>
  </div>
</div>
</div>
</div>
}
<br/>


    <legend>Attendees information</legend>
{ props.persons.map( person =>(
    
<div key = { person.id } className="card">

     <div className="card-header">
        person {person.id + 1}
      </div>

      <div className = "card-body">
     
  <div className="row">

  <div className="col-auto">
      <input name = "title"    type ="text"  onChange = { (e) => attendeesinfo(e,person.id) } className="form-control" placeholder="Title" required/>
    </div>

    <div className="col-4">
      <input type="text"  onChange = { (e) => attendeesinfo(e,person.id) }    className="form-control" name= "Fname"placeholder="Full name" required/>
    </div>

    
   
    </div>

<br/>
         
  <div className="row">

  <div className="col-4">
    <input type="text"   onChange = { (e) => attendeesinfo(e,person.id)} className="form-control" name = "Designation" placeholder="Designation" required/>
  </div>
  <div className="col-4">
    <input type="email"   onChange = { (e) => attendeesinfo(e,person.id)}  className="form-control" name = "mail" placeholder="E-mail" required/>
  </div>

  <div className="col-auto">
    <input type="tel" onChange = { (e) => attendeesinfo(e,person.id)}  className="form-control" name = "phone" placeholder="Phone number" required/>
  </div>
  </div>

  </div>
  </div>



)) }


<legend>Other</legend> 
<div className="card">
<div className = "card-body">
<div className="row">
<div className="col">
  <h5>Where did you hear about this event?</h5>
    <select name = "hear" onChange = { (e) => attendeesinfo(e,0)} >
{ props.form.dropdown.map( drop =>(
    <option key = { drop }value= { drop }>{ drop }</option> 




     


   
 
   

  )) }
   
  </select>
  </div>
 

  </div>
  <br/>
  
  <div id= "newField1"className="row">
<div className="col">
<textarea name = "hear" onChange = {(e) => attendeesinfo(e,0)} placeholder = "please specify" rows = "5" cols = "60" />
  </div>
  </div>


<br/>
<div className="row">
<div className="col">
  <h5>Have you or a friend attended one of our previous events?</h5>
    <select name = "previous"  onChange = { (e) => attendeesinfo(e,0)}  > 

    <option value= "No">No</option> 
    <option value= "Yes">Yes</option> 
   
   
  </select>
  </div>
 

  </div>
<br/>
  
<div id= "newField2"className="row">
<div className="col">
<textarea name = "previous" onChange = {(e) => attendeesinfo(e,0)} placeholder = "please specify "rows = "5" cols = "60" />
  </div>
  </div>


</div>
</div>

<br/>
<legend>Terms and Conditions</legend>
<div className = "card">
<div className = "card-body">
{ props.terms.map( term =>(
    <div className = "Container2" key = { term.id }>
      <h6>{term.name}</h6>
      <p>{term.Description}</p>

    </div>
))}
</div>

</div>

<input type = "submit" className="btn btn-primary btn-lg" />
</form>
</div>




    )
}


const mapStateToProps = state => ({
    persons: state.form.persons,
    event: state.event.Event,
    terms: state.term.terms,
    company: state.form.Company,
    contact: state.form.contact,
    attendees: state.form.persons,
    Companies:state.form.companies


});


export default connect(mapStateToProps,{sendform,createAttendee,createCompany,createContact})(Form)

