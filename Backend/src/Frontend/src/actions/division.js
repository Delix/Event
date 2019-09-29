import axios from 'axios'
import { GET_DIVISION } from './types';

export const getdiv = () => dispatch => {
    axios.get('/api/divisions/')
    .then(res =>{
        dispatch({
            type : GET_DIVISION,
            divisions:res.data
        
        });
    }).catch(err => console.log(err));
}