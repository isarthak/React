import { RESPONSE } from '../constants';

const sendDataReducer = ( state ={}, action) => {
    if ( action.type === RESPONSE.SEND){
        return{
            ...state,
            ...action.dataToSend
        }
    } else if(action.type === RESPONSE.UPDATE){
        return{
            ...state,
            ...action.dataToSend
        }
    }
    return state;
}

export default sendDataReducer