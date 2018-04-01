import React, { Component } from 'react';
import './fill_form.css';
import PageOne from './../pages/page_one';
import PageTwo from './../pages/page_two';
import PageThree from './../pages/page_three';
import PageFour from './../pages/page_four';

export default class Fill_Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            page_number : 1
        }
    }
    pageControl = (page_number) => {
        this.setState({
            page_number: page_number
        })
    }

    fill_form_render = () => {
        if(this.state.page_number == 1) {
            return (
                <PageOne
                    pageControl = {this.pageControl} 
                />
            )
        }
        if(this.state.page_number == 2) {
            return (
                <PageTwo
                    pageControl = {this.pageControl}
                />
            )
        }
        if(this.state.page_number == 3) {
            return (
                <PageThree
                    pageControl = {this.pageControl} 
                />
            )
        }
        if(this.state.page_number == 4) {
            return (
                <PageFour
                    pageControl = {this.pageControl} 
                />
            )
        }
    }
    render() {
        return (
            <div>
                {this.fill_form_render()}
            </div>
        );
    }
}
