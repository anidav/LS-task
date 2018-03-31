import React, { Component } from 'react';
import './pop_up.css';


import PageOne from './../pages/page_one';
import PageTwo from './../pages/page_two';

export default class Pop_Up extends Component {
  constructor(props){
    super(props);
    this.state = {
just : true
}  
}
  bla = (fake) => {
    this.setState({
      just: false
    })
    this.fake = fake     
   }
  render() {
    return (
      <div className="back">
    
     {
      !this.fake ?  <PageOne bla = {this.bla} /> : <PageTwo/>
     }
      </div>
    );
  }
}

