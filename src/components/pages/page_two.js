import React, { Component } from 'react';
import Button from './../common/button';
import './../common/button.css';   

export default class PageTwo extends Component {
    constructor(props){
        super(props);



}
  render() {


    return (
      <div className="fieldset">
        <p className="steps">Step 2 / 3</p>
        <input type="radio" name="package"/>Standard Package<br />
        <input type="radio" name="package"/>Premium Package    
         
        <div className="button_div">
          <Button   
            button_name='Previous' 
            button_className="button active"                    
            // fake ={this.state.fake}
            // toggleButton={this.toggleButton} 
          />
          <Button   
            button_name='Next' 
            button_className="button next"                    
            // fake ={this.state.fake}
            // toggleButton={this.toggleButton} 
          />
        </div>
      </div>
    );
  }
}

