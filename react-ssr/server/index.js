require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')


// @babel/preset-env is a smart preset that allows you to 
// use the latest JavaScript without needing to micromanage 
// which syntax transforms (and optionally, browser polyfills) 
// are needed by your target environment(s). This both makes your
//  life easier and JavaScript bundles smaller!

