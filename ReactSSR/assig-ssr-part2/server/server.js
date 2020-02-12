import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
// import ReactDOMServer from 'react-dom/server';
import { renderToString } from "react-dom/server";
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';


const PORT = 8000;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {    

    const context = {};
    const app = renderToString  (
      <StaticRouter context={context}  location={req.url} >
        <App />
      </StaticRouter>
    );  

    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
        // if(req.url === '/contact'){
        //   data = data.replace(/\$OG_TITLE/g, 'Contact Page');
        //   data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
        // }
        
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));

    });

});


app.listen(PORT, () => {
  console.log(`Started on ::  ${PORT}`);
});
