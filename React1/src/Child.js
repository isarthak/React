import React from 'react';
import { Link } from 'react-router-dom';

class Child extends React.Component 
{
    constructor(props) {
        super(props);
    }

    deleteEmployee= (i) =>{
        var r = window.confirm("Do you want to delete ("+this.props.location.parentList[i]+") from the list ?");
        if (r == true) {
            this.props.location.deleteEmployee(i);
            this.setState({});
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
