import React from 'react';
import { Link } from 'react-router-dom';

class Child extends React.Component 
{
   
    constructor(props) {
        super(props);
        this.editEmployee = this.editEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state=({
            sarthak:[]
        })
    }


    editEmployee=(i)=>{
        if(this.state.sarthak[i]!=''){
            this.props.location.handleChild(i,this.state.sarthak[i])
            
            let sarthak=[...this.state.sarthak];
            sarthak[i] = '';
            this.setState({
                sarthak
            });
        }
    };

    handleChange = (index,value) => {
        let sarthak=this.state.sarthak;
        sarthak[index] = value;
        this.setState({
            sarthak
        })
    }

    deleteEmployee= (i) =>{

        var r = window.confirm("Do you want to delete ("+this.props.location.parentList[i]+") from the list ?");
        if (r == true) {
            this.props.location.deleteEmployee(i);
            this.setState({});
        } else {
        }


    }


    render() 
    {
        return(
         <div className="App">
            <h1>My List</h1>
            {this.props.location.parentList.map((name, i) => {
                return(
                    <div>
                        {name} 
                        {/* <input
                            type="text"
                            placeholder="Enter text to edit"
                            onChange={(value)=>{
                                console.log("value",value)
                                this.handleChange(i,value.target.value);
                            }}
                            input={this.state.sarthak[i]}

                        /> */}


                        {/* <button
                            onClick={()=>{
                                this.editEmployee(i);
                                }}>Edit
                        </button> */}
                        <Link to={{
                            pathname:'/',
                            indexToEdit:i
                        }}> Edit</Link>

                        <button
                            onClick={()=>{this.deleteEmployee(i)}}>Delete
                        </button>
                    </div>
                )
            })} 
            <br/>
            <br/>
            <Link to={{
                        pathname:'/',
            }}>Add more Elements</Link>
         </div>
        )
    }
}
export default Child;















// import React from 'react';
// import Page1 from './Page1';

// // import './Banner.css';


// class Page2 extends React.Component 
// {

//     constructor(props) {
//         super(props);
//         this.state = {
//             list:this.props.dataFromChild,
//             send:{index:null,value:null}, ///DATA TO SEND IN PARENT
//         };
//         this.tempList = this.state.list;
        
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

//     editFunction(index, value){
//         console.log("@@@@index:"+index);
//         console.log("@@@@value:"+value);
//         this.setState({
//             send:{index:index,value:value}
//         });

//         this.props.temp(index,value);

//     }

     
//     render() 
//     {
//         let editList=[];
//         return(
//             <div>

//                 <button onClick={()=>{
//                         this.props.temp(this.state.list)
//                         this.props.history.push('/')
//                     }} >
//                         Home 
//                 </button>


//                 <ul>
//                     {this.state.list.map((name, index) => {
//                         return (
//                             <li key={ index }>
//                                 {name} 

//                                 <button 
//                                     onClick={()=>this.deleteFunction(name)}>
//                                     Delete
//                                 </button>

//                                 <input
//                                     type="text"
//                                     value={this.state.brand}
//                                     onChange={(value)=>{
//                                         this.editFunction(index, value.target.value);
//                                     }}
//                                 />  
 
//                                 <button
//                                     onClick={()=>{this.setState({list:editList})}}>
//                                     Edit
//                                 </button>

//                             </li>                        
//                         )   
//                     })}
//                 </ul>

                

//             </div>
//         )
//     }
// }
// export default Page2;


