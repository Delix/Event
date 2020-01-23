import {GET_NO,POST_FORM,GET_FORMS} from '../actions/types.js';


const initialState = {
    FormID :"",
    persons: [],
    Status:"" ,
    Form:"",
    
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_NO:  
        return {
          ...state,
          persons: action.payload,
          
          }
          case POST_FORM:
          return {
            ...state,
            Form: action.payload
          }
      
            case GET_FORMS:
              return {
                ...state,
                Form:action.payload
              }
        
        default:
            return state;

    }
}
