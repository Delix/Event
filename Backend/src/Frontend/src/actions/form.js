import axios from 'axios'
import { GET_COMPANY,GET_NO,POST_SEND,POST_ATTENDEE,POST_COMPANY,POST_CONTACT} from './types';


export const getcompany = () => dispatch => {
    axios.get('/api/company')
    .then(res => {
        dispatch({
            type : GET_COMPANY,
            payload:res.data
        
        });
    }).catch(err => console.log(err));
}


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
        phone:""
      }};
     persons.push(person);
       
        }
    
    
    dispatch({
    type: GET_NO,

    payload:persons
    });
}

export const createContact = (contact) => dispatch =>
{
    console.log(contact);
    axios.post('/api/contact/', contact).then(
        res =>
        {
          dispatch({
              type: POST_CONTACT,
              payload:res.data
          });
          }).catch(err => console.log(err));

    
}

export const createCompany = (company) => dispatch =>
{
    console.log(company)
    axios.post('/api/company/',company).then(
        res =>
        {
          dispatch({
              type: POST_COMPANY,
              payload:res.data
          });
          }).catch(err => console.log(err));

    
}
export const createAttendee = (Attendee) => dispatch =>
{
    let Attendees = [];
    Attendee.map(Attendee =>{
          
        const {title,name,designation,email,phone} = Attendee.attendee;
        const  attend =  {title,name, designation,email,phone}
        Attendees.push(attend)
      });
   
     
    axios.post("/api/attendee/",Attendees).then(
        res =>
        {
          dispatch({
              type: POST_ATTENDEE,
              payload:res.data
          });
          }).catch(err => console.log(err));
    
}
export const sendform = (form)  => dispatch =>
{ 
      
        axios.post('/api/Form/',form).then(
            res =>
            {
              dispatch({
                  type: POST_SEND,
                  payload:res.data
              });
              }).catch(err => console.log(err));

 
 

    
}

