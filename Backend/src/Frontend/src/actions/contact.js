import axios from 'axios'
import { GET_CONTACT } from './types';

export const getcon = () => dispatch => {

    
    axios.get('/api/Contact')
    .then(res => {
        dispatch({
            type : GET_CONTACT,
            payload:res.data
        
        });
        
    }).catch(err => console.log(err));
}