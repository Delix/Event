import {GET_NO} from '../actions/types.js';

const initialState = {
    Form :"",
    Number:""
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_NO:  
        return {
          ...state,
          Number: action.number
          
        }


        default:
            return state;

    }
}
