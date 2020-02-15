import { RESPONSE } from '../constants';

const emailReducer = ( state = '', action) => {
    if ( action.type === RESPONSE.LOAD){
        return{
            ...state,
            ...action.email
        }
    }
    return state;
}

export default emailReducer