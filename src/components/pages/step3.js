import React, { Component } from 'react';
import Input from './../../shared/inputs';
import Button from './../common/button';
import {Link} from 'react-router-dom';
import './../../shared/inputs.css';
import './../common/button.css';

export default class PageThree extends Component {
    
    render() {        
        return (
            <div className="fieldset">
                <p className="steps">Step 3 / 3</p>
                <Input 
                    type="number"
                    className="field"
                    value={this.props.step3.cardNumber} 
                    name="cardNumber"                   
                    placeholder="Credit Card Number..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input
                    type="text"
                    className="field"
                    value={this.props.step3.cardName} 
                    name="cardName"                   
                    placeholder="Credit Card Name..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input 
                    type="password"
                    className="field"
                    value={this.props.step3.cardCvc}    
                    name="cardCvc"                
                    placeholder="Credit Card cvc..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input
                    type="date"
                    className="field"
                    value={this.props.step3.cardExpDate}  
                    name="cardExpDate"                  
                    placeholder="Credit Card Expiration Date..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />

                <div className="button_div">
                    <Button
                        button_name='Previous'
                        button_className="button_item"
                        onClick={this.props.previousPage}
                    />
                    <Link to="success" >
                        <Button   
                            button_name='Sign Up!' 
                            button_className="button_item"   
                            disabled={!this.props.step3.fieldValid.cardNumber || !this.props.step3.fieldValid.cardName || 
                                    !this.props.step3.fieldValid.cardCvc || !this.props.step3.fieldValid.cardExpDate}
                            onClick={this.props.signUp}                
                        />  
                    </Link>
                </div>
            </div>
        );
    }
}
