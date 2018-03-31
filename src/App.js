import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Fill_Form from './components/fill_form/fill_form';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navigation">
          <Navigation />
        </div>
        <div>
          <p className="title">Multi Step Registration Form</p>
          <p className="description">This is a free multi-step registration form <br />
            Customize and use it as you like!</p>
        </div>
        <div>
          <Fill_Form />
        </div>  
      </div>
    );
  }
}


