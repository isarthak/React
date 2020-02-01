import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js"

class UserData extends React.Component{
    constructor(props) {
        super(props);

        const cookies = new Cookies();
        const cookieValue = cookies.get("emailKey");

        this.state = {
            userData: [],
            cookieValue
        };
      }

    componentDidMount() {

        const cookies = new Cookies();
        const cookieState = cookies.get("state");

        if(this.state.cookieValue === '' || cookieState !== undefined || cookies.get("emailKey")===undefined){
            this.props.history.push("/") 
        } else{
            this.props.loadUserData(this.state.cookieValue).then(()=>{
                const response = this.props.userData;
                if(response.status==="success"){
                    const userData = response.data;
                    this.setState({ userData });
                } 
                else{
                    const cookies = new Cookies();
                    this.props.history.push("/");
                    cookies.remove("emailKey")
                }
            })
        }
    }


    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h3 className="mt-5 mb-3">User Details</h3>
                
                <Link 
                    className="btn btn-warning"
                    to={{
                        pathname:'/',
                    }} 
                    onClick={()=>{
                        const cookies = new Cookies();
                        cookies.set("state","update")
                    }}>Edit
                </Link>
                                
                {' '}

                <Link 
                    className="btn btn-success"
                    to={{
                        pathname:'/'
                    }} 
                    onClick={()=>{
                        const cookies = new Cookies();
                        cookies.remove('emailKey');
                    }}>New Profile
                </Link>
                
                <br/><br/>
                <div>
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Fields</th>
                        <th scope="col">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.userData.name}</td>
                        </tr>
                        <tr>
                            <td>Email Id</td>
                            <td>{this.state.userData.emailId}</td>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <td>{this.state.userData.mobile}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{this.state.userData.address}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{this.state.userData.city}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{this.state.userData.state}</td>
                        </tr>
                        <tr>
                            <td>Zip Code</td>
                            <td>{this.state.userData.zipCode}</td>
                        </tr>
                    </tbody>
                    </table>      
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(UserData); 
