import React, { Component } from 'react';//Destructuring
import './Hello.css'

class Hello extends Component {
	render(){
		return (
			<div className = 'f1 tc'>
				<h1>Hello World!</h1>
				<p>{this.props.greeting}</p>
			</div>
			)	
	}
}

export default Hello;

//React uses JSX to create its virtual dom. 
//It changes what is needed underneath the hood,
//this is html looking syntax it is not actual html,
//it is javascript, therefore we use the className 
//tag instead of the class tag.  