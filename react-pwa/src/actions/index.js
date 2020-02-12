import axios from "axios";

//Get API
export function loadUserData(emailId){
    return(dispatch)=>{
        return axios.get("http://localhost:8080/getReactAssigFormData/"+emailId).then((response)=>{
            dispatch(changeUserData(response.data));
        })
    }
}
function changeUserData(userData){
    return{
        type:"setGetReactAssigFormData",
        userData:userData
    }
}

//Post API
export function saveUserData(token,data){
    return(dispatch)=>{
        return axios.post(`http://localhost:8080/postReactAssigFormData`, { token,data}).then((response)=>{
            dispatch(saveUserDataResponse(response.data));
        })
    }
}
function saveUserDataResponse(userData){
    return{
        type:"setPostReactAssigFormData",
        userData:userData
    }
}

//Update Api
export function updateUserData(token,data){
    return(dispatch)=>{
        return axios.post(`http://localhost:8080/updateReactAssigFormData`, { token,data}).then((response)=>{
            dispatch(saveUpdatedUserDataResponse(response.data));
        })
    }
}
function saveUpdatedUserDataResponse(userData){
    return{
        type:"setUpdateReactAssigFormData",
        userData:userData
    }
}