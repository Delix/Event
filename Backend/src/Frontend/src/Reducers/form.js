import {GET_NO,SEND_FORM} from '../actions/types.js';


const initialState = {
    Form :"",
    Number: 5,
    Status:""  
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_NO:  
        return {
          ...state,
          Number: action.payload
          
          }
          case SEND_FORM:
          return {
            ...state,
            status: action.payload
          }
      
        default:
            return state;

    }
}
