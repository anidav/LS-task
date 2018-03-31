import React, { Component } from 'react';
import './single_input.css';


export default class Single_Input extends Component {
    constructor(props){
        super(props);
this.state = {
    
}
      
      }
      
  

    render() {
   let a = this.props.input1
    
      
    return (
      <div>
      {a}
     <input className="fields"
     placeholder = {this.props.placeholder}
     onChange = {this.props.onChange}/>
      </div>
    );
  }
}


