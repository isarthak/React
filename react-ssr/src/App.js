import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  
  constructor() {
    super();
  }

  render(){
    return (
      <div>
          <div>
              <Link to="/home" style={{color:"black"}}>Home</Link>
              <Link to="/about" style={{color:"gray"}}>About</Link>
              <Link to="/contact" style={{color:"black"}}>Contact</Link>
          </div>

          <div>
              <Switch>
                  <Route path="/home" exact component={ Home } />
                  <Route path="/about" exact component={ About } />
                  <Route path="/contact" exact component={ Contact } />
              </Switch>
          </div>

      </div>

    );
  }
}

