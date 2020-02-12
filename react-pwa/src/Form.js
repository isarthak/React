import React from 'react';
import Cookies from 'universal-cookie';
import {connect} from "react-redux";
import * as actionCreators from "./actions/index.js"

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            emailId:'',
            mobile:'',
            address:'',
            city:'',
            state:'',
            zipCode:'',
            error:'',
            isEditTrue:false
        };
        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.mobileChange = this.mobileChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipCodeChange = this.zipCodeChange.bind(this);
        this.submitData = this.submitData.bind(this);
        this.updateData = this.updateData.bind(this);
      }


    //EXECUTE FIRSTLY
    componentDidMount(){
        const cookieState = new Cookies().get("state");
        const cookieEmail = new Cookies().get("emailKey");

        if( cookieState === undefined){
            this.setState({isEditTrue : false})
        } 
        else{
            this.setState({isEditTrue : true})
            this.props.loadUserData(cookieEmail).then(()=>{
                const response = this.props.userData;
                console.log("@@",response);
                if(response.status === "success"){
                    this.setState({
                        name: response.data.name,
                        emailId: response.data.emailId,
                        mobile: response.data.mobile,
                        address: response.data.address,
                        city: response.data.city,
                        state: response.data.state,
                        zipCode: response.data.zipCode,
                    })
                }
            })
        }

        const cookies = new Cookies();
        if( cookies.get("emailKey") !== undefined && (cookies.get("state")===undefined)){
            this.props.history.push("/userData") 
        }
    }

    //CHANGING STATES
    emailChange(event){
        this.setState({emailId : event.target.value});
    }
    nameChange(event){
        this.setState({name : event.target.value});
    }  
    mobileChange(event){
        this.setState({mobile : event.target.value});
    }  
    addressChange(event){
        this.setState({address : event.target.value});
    }  
    cityChange(event){
        this.setState({city : event.target.value});
    }  
    stateChange(event){
        this.setState({state : event.target.value});
    }  
    zipCodeChange(event){
        this.setState({zipCode : event.target.value});
    }

    //POSTING DATA
    submitData(){
        if(this.validateData()===false){
            return false;
        }
        this.setState({error:""});
        var token="";
        var data={
            "name":this.state.name,
            "emailId":this.state.emailId,
            "mobile":this.state.mobile,
            "address":this.state.address,
            "city":this.state.city,
            "state":this.state.state,
            "zipCode":this.state.zipCode
        }
        this.props.saveUserData(token,data).then(()=>{
            const response = this.props.userData;
            if(response.status === "success"){
                const cookies = new Cookies();
                cookies.set('emailKey', this.state.emailId);
                this.props.history.push("/userdata");
            } else{
                this.setState({error:"Duplicate Email"})
            }
        });
    }

    //UPDATING DATA
    updateData(){
        var data={
            "name":this.state.name,
            "emailId":this.state.emailId,
            "mobile":this.state.mobile,
            "address":this.state.address,
            "city":this.state.city,
            "state":this.state.state,
            "zipCode":this.state.zipCode
        }

        this.props.updateUserData(null,data).then(()=>{
            const response = this.props.userData;
            if(response.status === "success"){
                const cookies = new Cookies();
                cookies.remove('state');
                this.props.history.push("/userdata");
            } else{
                this.setState({error:"Duplicate Email"})
            }
        });

    }



    //VALIDATING DATA
    validateData(){
        if(this.state.name==='' || this.state.emailId==='' || this.state.mobile==='' || this.state.address==='' || this.state.city==='' || this.state.zipCode==='') {
            this.setState({error:"All fields are required"})
            return false;
        }
        if(!this.state.name.match(/^[A-Za-z]+$/)){
            this.setState({error:"Name is required"})
            return false;
        }
        if(!this.state.emailId.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({error:"Email is invalid"})
            return false;
        }
        if(!this.state.mobile.match(/^\d{10}$/)){
            this.setState({error:"Mobile is invalid"})
            return false;
        }
        if(!this.state.city.match(/^[A-Za-z]+$/)){
            this.setState({error:"City is required"})
            return false;
        }
        if(!this.state.zipCode.match(/^\d{6}$/)){
            this.setState({error:"Zip Code is invalid"})
            return false;
        }    
    }

    render(){
        return(
            <div className="border m-5 pt-3 pb-4">
                
                {
                    this.state.isEditTrue === false 
                        ?<h3>Registration Form</h3>
                        :<h3>Update Your Details</h3>              
                }
                <form className="pt-3">
                    Name:<br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.nameChange}/>
                    <br/>
                    Email Id:<br/>
                    <input type="text" name="emailId" value={this.state.emailId} onChange={this.emailChange} disabled={(this.state.isEditTrue?"disabled":"")}/>             
                    <br/>
                    Mobile:<br/>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.mobileChange}/>
                    <br/>
                    Address:<br/>
                    <input type="text" name="address" value={this.state.address} onChange={this.addressChange}/>
                    <br/>
                    City:<br/>
                    <input type="text" name="city" value={this.state.city} onChange={this.cityChange}/>
                    <br/>
                    State:<br/>
                    <input type="text" name="state" value={this.state.state} onChange={this.stateChange}/>
                    <br/>
                    Zip Code:<br/>
                    <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.zipCodeChange}/>
                    <br/>
                    <p  class={this.state.error!==""?"alert alert-warning mt-3":""}>{this.state.error}</p>
                    {
                        this.state.isEditTrue === false 
                            ?<button type="button" value="Submit" onClick={this.submitData} className="btn btn-success">
                                    Submit
                             </button>
                            :<button type="button" value="Submit" onClick={this.updateData} >
                                Update
                             </button>              
                    }

                </form>

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};
export default connect (mapStateToProps, actionCreators)(Form); 