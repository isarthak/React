import React from 'react';
import axios from 'axios';

class UserData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        };
      }

    componentDidMount() {
    axios.get(`http://localhost:8080/getReactAssigFormData/`+this.props.getEmailId)
        .then(res => {
            const userData = res.data.data;
            this.setState({ userData });
            console.log(userData)

        })
    }

    render(){
        return(
            <div style={{textAlign:"left"}}>
                <h3>User Details</h3>
                <div>Name: {this.state.userData.name}</div>
                <div>Email Id: {this.state.userData.emailId}</div>
                <div>Mobile: {this.state.userData.mobile}</div>
                <div>Address: {this.state.userData.address}</div>
                <div>City: {this.state.userData.city}</div>
                <div>State: {this.state.userData.state}</div>
                <div>Zip Code: {this.state.userData.zipCode}</div>
            </div>
        )
    }
}

export default UserData;