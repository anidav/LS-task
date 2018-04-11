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
                    <a className="register" href="/">register</a>           
                </div>
                <div className="logos">
                    <a href="https://www.facebook.com/" target="_blank" >
                        <img className="logo" src={facebook} alt="facebook_logo" />
                    </a>
                    <a href="https://twitter.com" target="_blank" >
                        <img className="logo" src={twitter} alt="twitter_logo" />
                    </a>
                    <a href="https://mail.ru" target="_blank" >
                        <img className="logo" src={mail} alt="mail_logo" />
                    </a>
                    <a href="https://www.skype.com" target="_blank" >
                        <img className="logo" src={skype} alt="skype_logo" />
                    </a>
                </div>  
            </nav>          
        );
    }
}
  
  