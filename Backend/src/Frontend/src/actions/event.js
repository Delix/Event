import axios from 'axios'
import { GET_EVENTS,GET_AEVENT ,GET_DIVEVENTS } from './types';

export const getevents = () => dispatch => {
    axios.get('/api/Events/')
    .then(res =>{
        dispatch({
            type : GET_EVENTS,
            payload:res.data

        
        });
    
    }).catch(err => console.log(err));
}

export const getdivevents = (id) => dispatch=>
{   let event = [];
    let count = 0;
      while(id.length > 0)
    {
      axios.get('/api/Events/'+id[count])
.then(res =>
    {
       event.push(res.data)
    }

).catch(err => console.log(err))
   count++;

   }
    dispatch({
    type: GET_DIVEVENTS,
    payload:event
    });
}
export const getevent = (id) => dispatch =>
{  dispatch({
    type: GET_AEVENT,
    payload:id });
}