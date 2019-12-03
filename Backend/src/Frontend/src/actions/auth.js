import axios from 'axios';
import {AUTH_FAIL,AUTH_LOGIN,AUTH_LOGOUT,AUTH_START,AUTH_SUCCES} from './types'


export const authstart = () => {

    return
    {

    }
    
  
}


export const getcon = () => dispatch => {

    
    axios.get('/api/Contact')
    .then(res => {
        dispatch({
            type : GET_CONTACT,
            payload:res.data
        
        });
        
    }).catch(err => console.log(err));
}


export const getcon = () => dispatch => {

    
    axios.get('/api/Contact')
    .then(res => {
        dispatch({
            type : GET_CONTACT,
            payload:res.data
        
        });
        
    }).catch(err => console.log(err));
}



export const getcon = () => dispatch => {

    
    axios.get('/api/Contact')
    .then(res => {
        dispatch({
            type : GET_CONTACT,
            payload:res.data
        
        });
        
    }).catch(err => console.log(err));
}