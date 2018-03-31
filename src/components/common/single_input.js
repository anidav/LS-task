import React, { Component } from 'react';


export default class Single_Input extends Component {
    constructor(props){
        super(props);
this.state = {
    
}
      
      }
      
  

    render() {
   let a = this.props.input1
    
      
    return (
      <div className="App">
      {a}
     <input 
     placeholder = {this.props.placeholder}
     onChange = {this.props.onChange}/>
      </div>
    );
  }
}


