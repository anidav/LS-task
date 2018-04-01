import React, { Component } from 'react';
import Button from './../common/button';
import './../common/button.css';

export default class PageFour extends Component {
    constructor(props){
        super(props);

}
togglePreviousButton = () => {
    this.props.pageControl(3)
}
    render() {
        return (
            <div className="fieldset">
                <div className="congrats">
                    <h2>Congratulations!</h2>
                    <h3>You have been successfully registered!</h3>                         
                </div>                
                <Button   
                    button_name='Sign Up!' 
                    button_className="button_item"                   
                />               
            </div>
        );
    }
}
