import React, { Component, Fragment } from 'react';
import Profile from './components/Profile';
import Home from './components/Home';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';

const store =configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            
                    <Router>
                        <Switch>
                            <Route  exact path='/' component={Home} />                    
                            <Route  path='/profile' component={Profile} />                    
                        </Switch>
                    </Router>
                
            </Provider>
        );
    }
}

export default App;
