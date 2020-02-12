import React from 'react';
import MetaTags from 'react-meta-tags';
import About from './About';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home Page </h1>
                <About name="sarthak"/>
                <MetaTags>
                    <title>Home</title>
                    <meta id="meta-home" name="home" content="This is home page of my app" />
                    <meta id="og-title" property="og:title" content="MyApp" />
                </MetaTags>‏‏‎
            </div>
        )
    }
}

export default Home;
