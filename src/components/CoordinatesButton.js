// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {

  	returnArray = (event) => {
  		let newArray = [event.clientX, event.clientY]
  		this.props.onReceiveCoordinates(newArray) 
  	}

	render() {
		return (<button onClick={this.returnArray}>Click me!</button>)
	}
}

export default CoordinatesButton;