import React from 'react';
import _ from 'lodash';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputDefaultStatus : true,
			value : ''
		}
	}
	componentWillMount() {
		let state = _.extend({}, this.state);
		state.value = this.props.value;
		this.setState(state);
	}

	validate = (event) => {
		this.props.onChange(event);
		this.setState({value : event.target.value});
		if (event.target.value === '') {this.setState({inputDefaultStatus : false});} 
		else {this.setState({inputDefaultStatus : true});}
	}
	render() {
		return (
			<div>
				{
					this.props.type === 'number' && 
					<input
				  	type={this.props.type}
						name={this.props.name}
						placeholder={this.props.placeholder}
						className={this.props.className}
						value={this.state.value}	
						onChange={this.validate}
						required
					/>
				}
				{
					this.props.type === 'text' && 
					<input
				  	type={this.props.type}
						name={this.props.name}
						placeholder={this.props.placeholder}
						className={this.props.className}
						value={this.state.value}	
						onChange={this.validate}
						required
					/>
				}
				{
					this.props.type === 'password' && 
					<input
						type={this.props.type}
						name={this.props.name}
						placeholder={this.props.placeholder}
						className={this.props.className}
						value={this.state.value}	
						onChange={this.validate}
						required
					/>
				}				
				{
					this.props.type === 'radio' && 
					<input 
						type={this.props.type}
						name={this.props.name}
						value={this.props.value}
						id={this.props.id}
						className={this.props.className}
						checked={this.props.checked}
						onChange={this.validate}
					/>
				}
				{
					this.props.type === 'date' && 
					<input 
						type={this.props.type}
						name={this.props.name}
						className={this.props.className}
						value={this.props.value}
						onChange={this.props.onChange}
					/>
				}				
			</div>			
		);
	}
}

export default Input;

