import axios from 'axios'
import { GET_EVENTS,GET_AEVENTS } from './types';

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
{
    dispatch({
    type: GET_AEVENTS,
    payload:id
    });
}
/*export const getevent = (id) => dispatch =>
{  dispatch({
    type: GET_AEVENT,
    id });
}*/