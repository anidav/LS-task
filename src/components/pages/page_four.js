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
            <h2>Congratulations!</h2>
        
         
        <div className="button_div">
            <Button   
                button_name='Previous' 
                button_className="button active"                    
            />
            <Button   
                button_name='Sign Up!' 
                button_className="button active"                    
            />
        </div>
      </div>
    );
  }
}
