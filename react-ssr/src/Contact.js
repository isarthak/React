import React from 'react';
import MetaTags from 'react-meta-tags';

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <h1>Contact Page </h1>
                <MetaTags>
                    <title>Contact</title>
                    <meta id="meta-Contact" name="Contact" content="This is Contact page of my app" />
                    <meta id="og-title" property="og:title" content="MyApp" />
                </MetaTags>‏‏‎
            </div>        
        )
    }
}
