import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import {loadDataByEmail} from '../actions'
import { Link } from 'react-router-dom';

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            places:["mumbai","goa","pune","hyderabad"],
        }
        this.getData = this.getData.bind(this);
        // this.handleError = this.handleError.bind(this);
    }

    componentDidMount(){
        const cookies = new Cookies();
        const emailKey = cookies.get("emailKey");

        if( emailKey === '' || emailKey===undefined){
            this.props.history.push("/") 
        } else{
            const email = {"value": cookies.get("emailKey")}
            this.getData(email)
        }
    }

    getData(email){
        this.props.loadDataByEmail(email)
    }

    // handleError(){
    //     const cookies = new Cookies();
    //     cookies.set("emailKey","")
    // }

    render(){
        const {response} = this.props;
        return(
            <div style={{textAlign:"center"}}>

                <br/>

                <Link 
                    className="btn btn-warning"
                    to={{pathname:'/',}} 
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

                {(response.status==="success")
                    ?<div>
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
                                        <td>{response.data.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email Id</td>
                                        <td>{response.data.emailId}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile</td>
                                        <td>{response.data.mobile}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{response.data.address}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{response.data.city}</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>{response.data.state}</td>
                                    </tr>
                                    <tr>
                                        <td>Zip Code</td>
                                        <td>{response.data.zipCode}</td>
                                    </tr>
                                </tbody>
                            </table>   
                     </div>
                    :null
                }
            </div>
        )
    }
}



const mapStateToProps = ({response}) => ({
    response
})

const mapDispatchToProps = (dispatch)=>({
    loadDataByEmail : (email)=>dispatch(loadDataByEmail(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);