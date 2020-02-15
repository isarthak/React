import axios from 'axios';
const URL = 'http://localhost:8080/';

const fetchData  = async(email)=> {
    const response = await fetch(`${URL}getReactAssigFormData/${email}`);
    const data = await response.json();
    if(response.status >= 400){

    }
    return data;
}

const sendData = async(dataToSend)=> {
    const response = await 
        axios({
            method:'post',
            url: `${URL}postReactAssigFormData`,
            data: dataToSend,
            headers: {
                'Content-Type' : 'application/json' 
            }
        })
    return response;
}

const updateData = async(dataToSend)=> {
    const response = await 
        axios({
            method:'post',
            url: `${URL}updateReactAssigFormData`,
            data: dataToSend,
            headers: {
                'Content-Type' : 'application/json' 
            }
        })
    return response;
}

export {fetchData, sendData, updateData};
