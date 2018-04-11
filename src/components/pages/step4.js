import React, { Component } from 'react';
import Button from './../common/button';
import {Link} from 'react-router-dom';
import './../common/button.css';

export default class PageFour extends Component {
  
    render() {
        return (
            <div className="fieldset">
                <div className="congrats">
                    <h2>Congratulations!</h2>
                    <h3>You have been successfully registered!</h3>   
                    <p>Click to <em><ins>Start</ins></em> button for <em><ins>Home page</ins></em></p>                     
                </div> 
                <Link to="/">   
                    <Button
                        button_name='Start'
                        button_className="button_item"                      
                    />   
                </Link>                                      
            </div>
        );
    }
}
