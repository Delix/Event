import { GET_DIVISIONS} from '../actions/types.js';



const initialState = {
    divisions :[]

}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_DIVISIONS:  
        return {
          ...state,
          divisions:action.payload
        }
  
        default:
            return {...state};

    }
}