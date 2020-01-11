import axios from 'axios'
import { GET_NO,POST_FORM, POST_DETAIL} from './types';
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
        form:"",
      }};
     persons.push(person);
       
        }
    
    
    dispatch({
    type: GET_NO,

    payload:persons
    });
}

export const sendform = (Form,pk)  => dispatch =>
{ 
  
        axios.post('/api/Form/'+pk+'/',Form).then(
            res =>
            {
              dispatch({
                  type: POST_DETAIL,
                  payload:res.data
              });
              }).catch(err => console.log(err));

 
 

    
}

export const postform = (Form)  => dispatch =>
{ 
    
 const form =  {Form};
  console.log(Form);
        axios.post('/api/Form/0/',form).then(
            res =>
            {
              dispatch({
                  type: POST_FORM,
                  payload:res.data
              });
              }).catch(err => console.log(err));

 
 
    
}

