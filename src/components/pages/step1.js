import React, { Component } from 'react';
import Input from './../../shared/inputs';
import Button from './../common/button';
import './../../shared/inputs.css';
import './../common/button.css';

export default class PageOne extends Component {
    render() {    
                 
        return (
            <div className="fieldset">
                <p className="steps">Step 1 / 3</p>
                <Input 
                    type="text"
                    className="field"
                    value={this.props.step1.firstName}    
                    name="firstName"
                    placeholder="First Name..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input 
                    type="text"
                    className="field"
                    value={this.props.step1.lastName}     
                    name="lastName"               
                    placeholder="Last Name..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input
                    type="text"
                    className="field"
                    value={this.props.step1.country}   
                    name="country"                 
                    placeholder="Country..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input 
                    type="text"
                    className="field"
                    value={this.props.step1.city}  
                    name="city"                  
                    placeholder="City..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input
                    type="text"
                    className="field"
                    value={this.props.step1.address} 
                    name="address"                  
                    placeholder="Address..."
                    required={ true }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <Input
                    type="text"
                    className="field"
                    value={this.props.step1.address2} 
                    name="address2"                   
                    placeholder="Address2..."
                    required={ false }
                    errorMessage='error'
                    onChange={ this.props.onChange }
                />
                <select className="field">
                    <option value="company">Company</option>
                    <option value="individual">Individual</option>
                </select>
                <div className="button_div">
                    <Button                         
                        button_name='Next'
                        button_className="button_item"
                        disabled={!this.props.step1.fieldValid.firstName || !this.props.step1.fieldValid.lastName || 
                                !this.props.step1.fieldValid.country || !this.props.step1.fieldValid.city || 
                                !this.props.step1.fieldValid.address || !this.props.step1.fieldValid.address2}
                        onClick={this.props.nextPage}
                    />
                </div>
            </div>
        )
    };
}

