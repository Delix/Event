import axios from 'axios'
import { GET_NO} from './types';



export const getnumber = (number) => dispatch=>
{
    console.log("Why?");
    dispatch({
    type: GET_NO,
    payload:number
    });
}

