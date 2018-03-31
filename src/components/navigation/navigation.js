import React, { Component } from 'react';
import './navigation.css';
import register_logo from './../images/register.png'

export default class Navigation extends Component {
    render() {
        
        return (
            <div className="navigation">
                <div>
                    <img className="register" src={register_logo} alt="register_logo"/>
                </div>
                <div>
                    logos
                </div>                
            </div>
      
        );
    }
}
  
  