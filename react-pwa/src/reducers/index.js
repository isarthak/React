let defaultState={
}
const mainReducer=(state=defaultState,action)=>{

    switch(action.type){
        case "setGetReactAssigFormData":
            return{
                ...state,
                userData:action.userData
            }     
        case "setPostReactAssigFormData":
            return{
                ...state,
                userData:action.userData
            }       
        case "setUpdateReactAssigFormData":
            return{
                ...state,
                userData:action.userData
            }                     
        default:
            return{
                ...state
            }
    }
}
export default mainReducer; 
