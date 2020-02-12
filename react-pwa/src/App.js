import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import UserData from './UserData';


class App extends Component { 

  constructor(props){
    super(props)
    this.sendEmailId = this.sendEmailId.bind(this);
  }
  state={
    email:''
  }

  sendEmailId(email){
    this.setState({
      email:email
    },()=>{
    });

  }

  render(){
    return (
      <div className="App">
          <Router >
            <Switch>
              <Route  exact path='/' component={(props)=>(<Form {...props} sendEmailId={this.sendEmailId}></Form>)} />                    
              <Route  path='/userdata' component={(props)=>(<UserData {...props} getEmailId={this.state.email}></UserData>)} />                    
            </Switch>
          </Router>
      </div> 
    );
  }
}

export default App;
