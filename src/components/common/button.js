import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
 
  render() {     
    return (     
      <button
        className={this.props.button_className}
        onClick={this.props.onClick}   
        disabled={this.props.disabled}     
      >
        {this.props.button_name}
      </button>     
    );
  }
}
