import React from 'react';
import MetaTags from 'react-meta-tags';
import Home from './Home';
import Contact from './Contact';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About Page </h1>
                <h3>{this.props.name}</h3>
                <MetaTags>
                    <title>About</title>
                    <meta id="meta-about" name="about" content="This is about page of my app" />
                    <meta id="og-title" property="og:title" content="MyApp" />
                </MetaTags>‏‏‎
            </div>        
        )
    }
}
