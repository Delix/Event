import axios from 'axios'
import { GET_SOCIAL} from './types';



export const getsocial = () => dispatch=>
{
    axios.get("api/social")
    .then(res => {
        dispatch({
            type : GET_SOCIAL,
            payload:res.data
        
        });
    }).catch(err => console.log(err));
   
}



