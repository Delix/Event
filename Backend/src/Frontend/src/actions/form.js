import axios from 'axios'
import { GET_NO,POST_SEND} from './types';



export const getnumber = (number) => dispatch=>
{
     let persons = [];
        while(persons.length < number)
       { 
    let person =  {
        id: persons.length,
        title:"",
        name:"",
        designation:"",
        email:"",
        phone:"",
        date:"",
        Company:""
        };
         persons.push(person);
       
        }
    
    
    dispatch({
    type: GET_NO,

    payload:persons
    });
}




export const sendform = (person,company,form)  => dispatch =>
{  let forms =[];
  
    if(person.length > 1)
    {
        while(person.length >= forms.length)
        {
           forms.push(form)

        }
        let application = [person,company,forms];
      
        axios.post('/api/Form/',application).then(
            res =>
            {
              dispatch({
                  type: POST_SEND,
                  payload:res.data
              });
              }).catch(err => console.log(err));

    }
    else
    {
        forms.push(form)
        let application = [person,company,forms];
        console.log(application);
        axios.post("api/Form",application).then(
            res =>
            {
              dispatch({
                  type: POST_SEND,
                  payload:res.data
              });
              }).catch(err => console.log(err));

    }

 
 

    
}

