import axios from 'axios'
import { GET_DIVISIONS } from './types';

export const getdiv = () => dispatch => {
    axios.get('/api/Divisions')
    .then(res => {
        dispatch({
            type : GET_DIVISIONS,
            payload:res.data
        
        });
    }).catch(err => console.log(err));
}

