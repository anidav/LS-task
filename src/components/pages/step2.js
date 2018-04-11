import React, { Component } from 'react';
import Button from './../common/button';
import Input from './../../shared/inputs';
import './../common/button.css';

export default class PageTwo extends Component {

  render() {
    return (
      <div className="fieldset">
        <p className="steps">Step 2 / 3</p>
        <div className="package">
          <label htmlFor="standard"> Standart 
          <Input               
            type="radio"
            name="package"
            value="Standart"
            id="standart"
            checked={this.props.step2.package}
            onChange={this.props.onChange}
          />       
          </label> 
          <label htmlFor="premium"> Premium 
          <Input            
            type="radio"
            name="package"
            value="Premium"
            id="premium"
            checked={this.props.step2.package}
            onChange={this.props.onChange}
          />  
          </label>                  
        </div>
        <div className="button_div">
          <Button
            button_name='Previous'
            button_className="button_item"
            onClick={this.props.previousPage}
          />
          <Button
            button_name='Next'
            button_className="button_item"
            onClick={this.props.nextPage}
            disabled={!this.props.step2.fieldValid.package}
          />
        </div>
      </div>
    );
  }
}
