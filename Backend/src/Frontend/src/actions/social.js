import axios from 'axios'
import { GET_SOCIAL} from './types';



export const getsocial = () => dispatch=>
{    console.log("hello");
    axios.get('/api/Social')
    .then(res => {
        dispatch({
            type : GET_SOCIAL,
            payload:res.data
        
        });
    }).catch(err => console.log(err));
   
}



