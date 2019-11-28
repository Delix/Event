import {GET_COMPANY,GET_NO,POST_SEND,POST_CONTACT, POST_COMPANY, POST_ATTENDEE} from '../actions/types.js';


const initialState = {
    Form :"",
    Company:1,
    contact:1,
    companies:[],
    persons: [],
    Status:"" 
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_NO:  
        return {
          ...state,
          persons: action.payload
          
          }
          case POST_SEND:
          return {
            ...state,
            status: action.payload
          }
          case POST_ATTENDEE:
            return {
              ...state,
              persons: action.payload
            }
            case POST_COMPANY:
              return {
                ...state,
                Company: action.payload
              }
              case POST_CONTACT:
                return {
                  ...state,
                  contact: action.payload
                }
                case GET_COMPANY:
                  return {
                    ...state,
                    companies: action.payload
                  }

      
        default:
            return state;

    }
}
