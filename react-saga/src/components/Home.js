import React from 'react';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import {loadDataByEmail, sendUserData, updateUserData} from '../actions';

class Home extends React.Component{
 
    constructor(props){
        super(props);
        this.state={
            places:["mumbai","goa","pune","hyderabad"],
            name: '',
            emailId:'',
            mobile:'',
            address:'',
            city:'',
            state:'',
            zipCode:'',
            error:'',
            isEditTrue:false
        }
        this.sendData = this.sendData.bind(this);
    }

    componentDidMount(){
        const cookies = new Cookies();
        const {response} = this.props;

        if( cookies.get("state") === undefined){
            this.setState({isEditTrue : false})
        } else{
            this.setState({isEditTrue : true})
            const email = {"value": cookies.get("emailKey")}
            this.props.loadDataByEmail(email)
        }

        if( cookies.get("emailKey") !== undefined && (cookies.get("state")===undefined)){
            this.props.history.push("/profile") 
        }
    }




    componentWillReceiveProps(nextProps){
        const cookies = new Cookies();
        if( cookies.get("state") === "update"){
            const response = nextProps.response.data;
            this.setState({
                name: response.name,
                emailId: response.emailId,
                mobile: response.mobile,
                address: response.address,
                city: response.city,
                state: response.state,
                zipCode: response.zipCode,
            })
        }

        const status = nextProps.response.data.status;
        if( status === "success"){
            const cookies = new Cookies();
            cookies.set('emailKey', this.state.emailId);
            this.props.history.push("/profile");
        } 
        else if( status === "failed" ){
            this.setState({error:"Oops try again ! (Duplicate Email)"})
        }
    }




    sendData(){
        if(this.validateData()===false){
            return false;
        }
        this.setState({error:""})

        var data={
            "name":this.state.name,
            "emailId":this.state.emailId,
            "mobile":this.state.mobile,
            "address":this.state.address,
            "city":this.state.city,
            "state":this.state.state,
            "zipCode":this.state.zipCode
        }
        const dataToSend = {"token":"","data":data}
        this.props.sendUserData(dataToSend);
    }

     updateData=()=>{
        var data={
            "name":this.state.name,
            "emailId":this.state.emailId,
            "mobile":this.state.mobile,
            "address":this.state.address,
            "city":this.state.city,
            "state":this.state.state,
            "zipCode":this.state.zipCode
        }
        const dataToSend = {"token":"","data":data}
        console.log("data to update :: ", dataToSend)
        this.props.updateUserData(dataToSend);
        const cookies = new Cookies();
        cookies.remove('state');
    }


    emailChange=(event)=>{
        this.setState({emailId : event.target.value});
    }
    nameChange=(event)=>{
        this.setState({name : event.target.value});
    }  
    mobileChange=(event)=>{
        this.setState({mobile : event.target.value});
    }  
    addressChange=(event)=>{
        this.setState({address : event.target.value});
    }  
    cityChange=(event)=>{
        this.setState({city : event.target.value});
    }  
    stateChange=(event)=>{
        this.setState({state : event.target.value});
    }  
    zipCodeChange=(event)=>{
        this.setState({zipCode : event.target.value});
    }


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
        const {response} = this.props;
        return(
            <div style={{textAlign:"center"}}>
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
                            ?<button type="button" onClick={this.sendData} className="btn btn-success">Save Data</button>
                            :<button type="button" value="Submit" onClick={this.updateData} >Update</button>              
                    }

                </form>
            </div>
        )
    }
}

const mapStateToProps = ({response}) => ({
    response
})

const mapDispatchToProps = (dispatch)=>({
    loadDataByEmail : (email)=>dispatch(loadDataByEmail(email)),
    sendUserData : (dataToSend)=>dispatch(sendUserData(dataToSend)),
    updateUserData : (dataToSend)=>dispatch(updateUserData(dataToSend)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);


// const mapStateToProps=(state)=>{
//     return state
// };