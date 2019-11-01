import axios from 'axios'
import { GET_NO,SEND_FORM} from './types';



export const getnumber = (number) => dispatch=>
{
     let persons = [];
        while(persons.length < number)
       { 
    let person =  {
        id: persons.length,
        title:"",
        firstName:"",
        lastName:"",
        designation:"",
        email:"",
        phone:"",
        date:""
        };
         persons.push(person);
       
        }
    
    
    dispatch({
    type: GET_NO,

    payload:persons
    });
}




export const sendform = (person,company,contact,previous,formID,eventid) => dispatch =>
{ 

    axios.post("api/Guest",
    { 
    Title: person.title,
    Name : person.name,
    Designation : person.designation,
    Email: person.email,
    Phone:person.phone,
    date: person.date,
    

    Company: company.name,
    Sector: company.sector,
    Hear: company.hear,

    Contact: contact,
    previous: previous,
    FormID:formID,
    terms: true,
    Event: eventid



    }
    )

    
}

