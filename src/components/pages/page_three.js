import React, { Component } from 'react';
import Single_Input from './../common/single_input';
import Button from './../common/button';
import './../common/single_input.css';
import './../common/button.css';     

export default class PageThree extends Component {
    constructor(props){
        super(props);
        this.state = {
          input1: '',
          input2: '',
          input3: '',
          input4: ''
        }    
  this.arr = [
      {
          placeholder: 'Credit Card number...',
          onChange: this.inputOne   
      },
      {
          placeholder: 'Credit Card name...',
          onChange: this.inputTwo
      },
      {
          placeholder: 'Credit Card cvc...',
          onChange: this.inputThree
      },
      {
          placeholder: 'Credit Card expiration date...',
          onChange: this.inputFour
      }      
  ]  
  }       
  
  inputOne = (event) => {        
      this.setState({
          input1:  event.target.value
      })
  }
  inputTwo = (event) => {        
      this.setState({
          input2:  event.target.value
      })
  }
  inputThree = (event) => {        
      this.setState({
          input3:  event.target.value
      })
  }
  inputFour = (event) => {        
      this.setState({
          input4:  event.target.value
      })
}

  render() {
    let result = this.arr.map((item, index) => {
      return (
        <div key = {index}>
          <Single_Input 
          // input1={this.state.input1}
          placeholder ={item.placeholder}
          onChange ={item.onChange} />
        </div>
      )
    })    


    return (
      <div className="fieldset">
        <p className="steps">Step 3 / 4</p>               
        {result}
        <div className="button_div">
          <Button   
            button_name='Previous' 
            button_className="button active"                    
            fake ={this.state.fake}
            toggleButton={this.toggleButton} 
          />
          <Button   
            button_name='Next' 
            button_className="button next"                    
            fake ={this.state.fake}
            toggleButton={this.toggleButton} 
          />
        </div>
      </div>
    );
  }
}
