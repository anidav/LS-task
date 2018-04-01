import React, { Component } from 'react';
import Button from './../common/button';
import './../common/button.css';

export default class PageTwo extends Component {
  constructor(props){
    super(props);
}

  toggleNextButton = () => {
    this.props.pageControl(3)
  }
  togglePreviousButton = () => {
    this.props.pageControl(1)
  }

  render() {
    return (
      <div className="fieldset">
        <p className="steps">Step 2 / 3</p>
        <div className="package">
          <input type="radio" name="package" checked/>Standard Package<br />
          <input type="radio" name="package"/>Premium Package
        </div>
        <div className="button_div">
          <Button
            button_name='Previous'
            button_className="button_item"
            toggleButton={this.togglePreviousButton}
          />
          <Button
            button_name='Next'
            button_className="button_item"
            toggleButton={this.toggleNextButton}
          />
        </div>
      </div>
    );
  }
}
