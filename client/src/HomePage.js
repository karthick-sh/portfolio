import React, { Component } from 'react';
import Name from './Name'

class HomePage extends Component {
    
    componentDidMount() {
        //console.log("THE ROOT ELEMENT IS: ", this.threeRootElement);
        console.log("HOME PAGE");
    }

    render () {
        return (
            	<div className='content-container'>
					<Name className="name-title"/>
				</div>
        );
    }
}

export default HomePage;