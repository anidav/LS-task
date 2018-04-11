import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import RegistrationContainer from './container/registrationContainer';
import Step4 from './components/pages/step4'

export default class App extends Component {
  render() {
    return (
      <div>
        <section>
          <Navigation />
        </section>
        <section>
          <p className="title">Multi Step Registration Form</p>
          <p className="description">This is a free multi-step registration form.
          Customize and use it as you like!</p>
        </section>
        <section>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={ RegistrationContainer } />
              <Route path="/success" component= {Step4} />
            </div>
          </BrowserRouter>
        </section>
      </div> 
     );
  }
}


