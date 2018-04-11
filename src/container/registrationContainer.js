import React, { Component } from 'react';
import './registrationContainer.css';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import RegistrationAction from '../actions/registrationAction';
import PageOne from './../components/pages/step1';
import PageTwo from './../components/pages/step2';
import PageThree from './../components/pages/step3';
import PageFour from './../components/pages/step4';

class RegistrationContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            step : 1,
            step1: {
                firstName: '',
                lastName: '',
                country: '',
                city: '',
                address: '',
                address2: '',            
                fieldValid: {
                    firstName: false,
                    lastName: false,
                    country: false,
                    city: false,
                    address: false,
                    address2: false,
                },                
            },
            step2: {
                package: '',
                fieldValid : {
                    package: false
                }
            },         

            step3: {
                cardNumber: '',
                cardName: '',
                cardCvc: '',
                cardExpDate: '',           
                fieldValid: {
                    cardNumber: false,
                    cardName: false,
                    cardCvc: false,
                    cardExpDate: false,
                }                       
            },   
        }
    }  

    onDataChange = (event) => {
		let states = _.assign({}, this.state);  
		let stepName = states[`${Object.keys(this.state)[0]}${this.state.step}`]; 
		stepName[event.target.name] = event.target.value;
        this.setState(states, this.isValid(event));        
	}

	isValid = (event) => { 
		let states = _.assign({}, this.state);
        let stepName = states[`${Object.keys(this.state)[0]}${this.state.step}`];        
		event.target.value === '' ? stepName.fieldValid[event.target.name]=false : stepName.fieldValid[event.target.name] = true;
		this.setState(states);
	}
       
    nextPage = () => {             
        let step=this.state.step
        this.setState({
            step: ++step
        })                  
    }
    previousPage = () => {
        let step=this.state.step
        this.setState({
            step: --step
        })        
    }        
    signUp = () => {        
		this.props.storeInState({
			firstName   : this.state.step1.firstName,
			lastName    : this.state.step1.lastName,
			country     : this.state.step1.country,
			city        : this.state.step1.city,
            address     : this.state.step1.address,
            address2    : this.state.step1.address2,
            package     : this.state.step2.package,
			cardNumber  : this.state.step3.cardNumber,
			cardName    : this.state.step3.cardName,
			cardCvc     : this.state.step3.cardCvc,
            cardExpDate : this.state.step3.cardExpDate            
        });       
	}
    registration_render = () => {
        if(this.state.step === 1) {
            return (
                <PageOne nextPage = {this.nextPage} step1 = {this.state.step1} onChange={this.onDataChange}/>
            )
        }
        if(this.state.step === 2) {
            return (
                <PageTwo nextPage = {this.nextPage} previousPage = {this.previousPage}  step2 = {this.state.step2} onChange={this.onDataChange}/>
            )
        }
        if(this.state.step === 3) {
            return (
                <PageThree previousPage = {this.previousPage} step3 = {this.state.step3} onChange={this.onDataChange} signUp={this.signUp} />
            )
        }        
    }
    render() {
        return (
            <div>
                {this.registration_render()}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({   
    storeInState : (data) => dispatch(RegistrationAction(data)),
});

export default connect(null, mapDispatchToProps)(RegistrationContainer);





