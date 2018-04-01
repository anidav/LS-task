import React, { Component } from 'react';
import './single_input.css';


export default class Single_Input extends Component {
  constructor(props){
    super(props);
  }
      
  render() {          
    return (
      <input className="fields"
        placeholder = {this.props.placeholder}
        onChange = {this.props.onChange}
      />
    );
  }
}


