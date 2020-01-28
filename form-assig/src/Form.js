import React from 'react';
import axios from 'axios';

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
            error:''
        };
        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.mobileChange = this.mobileChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipCodeChange = this.zipCodeChange.bind(this);
        this.submitData = this.submitData.bind(this);
      }

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
    submitData(){
        if(this.state.name=='' || this.state.emailId=='' || this.state.mobile=='' || this.state.address=='' || this.state.city=='' || this.state.zipCode=='') {
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
        this.setState({error:""})

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
        
        axios.post(`http://localhost:8080/postReactAssigFormData`, { token,data})
        .then(res => {
          console.log(res);
          console.log(res.data.status);
          if(res.data.status==="success"){
            this.props.sendEmailId(this.state.emailId);
            this.props.history.push("/userdata") 
            }else{
                this.setState({error:"Duplicate Email"})
            }
        })
    }

    render(){
        return(
            <div>
                <form  >
                    Name:<br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.nameChange}/>
                    <br/>
                    Email Id:<br/>
                    <input type="text" name="emailId" value={this.state.emailId} onChange={this.emailChange}/>
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
                    <p style={{color:"red"}}>{this.state.error}</p>
                    <button type="button" value="Submit" onClick={this.submitData} >
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default Form;
