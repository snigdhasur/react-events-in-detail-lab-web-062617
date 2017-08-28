// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component {


	delayButtonFunc = (event) => {
		event.persist()
  		this.props.onDelayedClick(event)
  	}

	render() {
		return (<button onClick={this.delayButtonFunc}>Click me!</button>)
	}
}

export default DelayedButton;