import axios from 'axios'
import { GET_NO, POST_FORM} from './types';
export const getnumber = (number) => dispatch=>
{
     let persons = [];
        while(persons.length < number)
       { 
     

    let person =  { id: persons.length,attendee : {
        title:"",
        name:"",
        designation:"",
        email:"",
        phone:"",
      }};
     persons.push(person);
       
        }
    
    
    dispatch({
    type: GET_NO,

    payload:persons
    });
}

export const sendform = (Form)  => dispatch =>
{ 
  
        axios.post('/api/Form/',Form).then(
            res =>
            {
              dispatch({
                  type: POST_FORM,
                  payload:res.data
              });
              }).catch(err => console.log(err));

 
 

    
}


