import React from 'react';
import { Link } from 'react-router-dom';


const employeeDirectory=[];
class Parent extends React.Component
{
    constructor(props) {
        super(props);
        this.addEmployee = this.addEmployee.bind(this);
        this.state={
            newList:employeeDirectory,
            newValue:""
        };
    }

    addEmployee(){
        employeeDirectory.push(this.state.newValue);
        this.setState({newValue:""})
    }

    handleChange = (e) => {
        this.setState({
            newValue: e.target.value
        })
    }

    handleChild = (i,v) => {
        console.log("hi",i,v);
        var l =this.state.newList;
        l[i]=v;
        this.setState({
            newList:l
        })
    };

    deleteEmployee = (i) =>{
        var l = this.state.newList;
        if(i > -1){
            l.splice(i,1)
        };
        this.setState({
            newList:l
        })
    };

    render() 
    {
        return(
        <div className="App">
            <h1>Add text to your List</h1>

            <input
                placeholder="Enter text"
                value={this.state.newValue}
                onChange={(e)=>{this.handleChange(e)}}
            />
            
            {
                this.state.newValue!="" 
                    ?<button
                        onClick={this.addEmployee}
                     >Add
                     </button>
                    :false
            }
            <div>
                {this.state.newList.length>0
                ?    <Link to={{
                        pathname:'/page2',
                        deleteEmployee:this.deleteEmployee,
                        parentList:this.state.newList,
                        handleChild:this.handleChild,
                    }}>Show List</Link>
                :false
                }
            </div>

        </div>
        )
    }
}
export default Parent;







                            // {/* /* <Child
                            //     key={employee.id}
                            //     id={employee.id}
                            //     name={employee.name}
                            //     position={employee.position}
                            //     setEmployeeOfTheMonth={this.setEmployeeOfTheMonth}
                            // /> */ */}












// <div>
// <button className="App-link" onClick={()=>{
//     this.props.bringData(carname)
//     // this.props.bringData({data:'this is data'})
//     // console.log('history333-',this.props)
//     this.props.history.push('/page2')
// }} >
//     Go to Page 2 
// </button> 
// </div>





// import React, { Component } from 'react';
// import Page2 from './Page2';
// // import './Banner.css';

// class Page1 extends React.Component{
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "",
//             send:this.props.setData,
//             list:["sarthak"]
//         };

    

//     }

//     deleteFunction(name){
//         for( var i = 0; i < this.tempList.length; i++){ 
//             if ( this.tempList[i] === name) {
//                 this.tempList.splice(i, 1); 
//             }
//          }
//          console.log(this.tempList)
//          this.setState({list: this.tempList})
//     }



//     render() 
//     {
//         // console.log('props are', this.props)
//         const joined = this.state.list.concat(this.state.brand);
//         return(

//             <div>
//                 <h3>Type the string to add</h3>
//                 <input
//                     type="text"
//                     value={this.state.brand}
//                     placeholder="enter text"
//                     onChange={(value)=>{
//                         this.setState({brand:value.target.value})
//                     }}
//                 />       


//                 {this.state.brand!=""?
//                     <button 
//                         onClick={()=>{
//                             this.setState({ list: joined, brand:""})
                            
//                         }}>
//                         Add to List 
//                     </button> 
//                 :false }


//             <div>

//                 {this.state.list.length>0?
//                     <button onClick={()=>{
//                         // this.props.bringData(carList)
//                         this.props.bringData(this.state.list)
//                         this.props.history.push('/page2')
//                     }} >
//                         Show List
//                     </button> 
                
//                 :false}

                    
//                 </div>

//             </div>

//         )
//     }
    

// }
// export default Page1;


// // <div>
// // <button className="App-link" onClick={()=>{
// //     this.props.bringData(carname)
// //     // this.props.bringData({data:'this is data'})
// //     // console.log('history333-',this.props)
// //     this.props.history.push('/page2')
// // }} >
// //     Go to Page 2 
// // </button> 
// // </div>