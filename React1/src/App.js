import React,{Component} from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import Parent from './Parent';
import Child from './Child';

var history = createBrowserHistory()
class App extends Component { 
  
    constructor(props){
      super(props)
      this.state={
        list:[]
      }
    }

  
   

  render(){
    return (
      <div >
          <Router history={history} >
            <Switch>
                  <Route exact  path='/'  component={(props)=>(<Parent {...props} ></Parent>)}/>
                  <Route  path='/page2' component={(props)=>(<Child {...props} ></Child>)} />                    
            </Switch>
          </Router>
      </div>  
    );
  }
}

export default App;















// import React,{Component} from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import { Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory} from 'history';
// import Parent from './Parent';
// import Child from './Child';
// // import { Router } from 'react-router';

// var history = createBrowserHistory()
// let index;
// let value;

// class App extends Component {
  
//   constructor(props){
//     super(props)
//     // this.bringData=this.bringData.bind(this)
//     this.state={
//       data:[],
//       // send:{index:"",value:""},
//       sendIndex:0,
//       sendValue:"sdfs"
//     }
//   }

//   bringData=(homeData)=>{
//     this.setState({data:homeData})
//   }
  
//   getData=(i,v)=>{
//     index = i;
//     value = v;
//     // this.setState({sendValue:'ff'})
//     // this.setState({data2: data}, ()=>console.log(this.state.data2));
//     console.log("data",i+v)
//   }


//   render(){
//     return (
//       <div >
//           <Router history={history} >
//             <div>
//             <Switch>

//                   <Route exact  path='/'  component={(props)=>(<Parent {...props} bringData={this.bringData}  setData={this.getData} ></Parent>)}/>
//                   <Route  path='/page2' component={(props)=>(<Child {...props}  dataFromChild={this.state.data} temp={this.getData}></Child>)} />                    
//             </Switch>


//             {/* <Switch>
//                   <Route exact  path='/'  component={(props)=>(<Page1 {...props} bringData={this.bringData}  setData={this.state.data2} ></Page1>)}/>
//                   <Route  path='/page2' component={(props)=>(<Page2 {...props}  dataFromChild={this.state.data} temp={this.getData}></Page2>)} />                    
//             </Switch> */}
//             </div>
//           </Router>
//       </div>  
//     );
//   }
// }

// export default App;
