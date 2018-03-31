import React, { Component } from 'react';
import PageTwo from './../pages/page_two'

export default class Button extends Component {
  render() {


    return (
      <div className="App">
    <button className={this.props.button_className} 
    onClick={this.props.toggleButton}>
      
        
    {this.props.button_name}
      
        </button>
        
      </div>
    );
  }
}

