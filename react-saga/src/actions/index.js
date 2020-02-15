import { RESPONSE } from '../constants';

//GET USER DATA BY EMAIL
const loadDataByEmail = (email) => ({
    type : RESPONSE.LOAD,
    email
})

//POST USER DATA 
const sendUserData = (dataToSend) => ({
    type: RESPONSE.SEND,
    dataToSend
})

//UPDATE DATA
const updateUserData = (dataToSend) => ({
    type: RESPONSE.UPDATE,
    dataToSend
})

//TO SET RESPONSE FROM API
const setData = (response) => ({
    type : RESPONSE.SUCCESS,
    response,
})

//NEVER USED
const setError = (error) => ({
    type : RESPONSE.FAIL,
    error,
})

export { setData, setError, loadDataByEmail, sendUserData, updateUserData};