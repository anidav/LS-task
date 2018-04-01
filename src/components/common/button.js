import React, { Component } from 'react';
import PageOne from './../pages/page_one'
import PageTwo from './../pages/page_two';
import './button.css';

export default class Button extends Component {
  checkDisabled() {
    if(this.props.input1 == '' ||
      this.props.input2 == '' ||
      this.props.input3 == '' ||
      this.props.input4 == '' ||
      this.props.input5 == '' ||
      this.props.input6 == '') {
        return true
    }
    else {
      return false
    }
  }
    
  render() {
    return (     
      <button
        className={this.props.button_className}
        onClick={this.props.toggleButton}
        disabled={this.checkDisabled()}
      >
        {this.props.button_name}
      </button>     
    );
  }
}
