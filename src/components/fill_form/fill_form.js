import React, { Component } from 'react';
import './fill_form.css';
import PageOne from './../pages/page_one';
import PageTwo from './../pages/page_two';

export default class Fill_Form extends Component {
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
      <div>
    
     {
      !this.fake ?  <PageOne bla = {this.bla} /> : <PageTwo/>
     }
      </div>
    );
  }
}
