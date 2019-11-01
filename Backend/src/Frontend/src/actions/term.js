import axios from 'axios'
import { GET_TERM } from './types';

export const getTerm = () => dispatch => {
    axios.get('/api/TermCondition')
    .then(res => {
        dispatch({
            type : GET_TERM,
            payload:res.data
        
        });
    }).catch(err => console.log(err));
}