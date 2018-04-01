import React, { Component } from 'react';
import './navigation.css';
import facebook from './../images/facebook_logo.png';
import twitter from './../images/twitter_logo.png';
import mail from './../images/mail_logo.png';
import skype from './../images/skype_logo.png';

export default class Navigation extends Component {
    render() {
        
        return (
            <nav className="navigation">
                <div>
                    <a className="register" href="">register</a>           
                </div>
                <div className="logos">
                    <a href="https://www.facebook.com/"><img className="logo" src={facebook} /></a>
                    <a href="https://twitter.com"><img className="logo" src={twitter} /></a>
                    <a href="https://mail.ru"><img className="logo" src={mail} /></a>
                    <a href="https://www.skype.com"><img className="logo" src={skype} /></a>
                </div>  
            </nav>          
        );
    }
}
  
  