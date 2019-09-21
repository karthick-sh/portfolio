import React, { Component } from 'react';

import threeEntryPoint from "./threejs/threeEntryPoint"
import Title from './Title'

class HomePage extends Component {
    
    componentDidMount() {
        //console.log("THE ROOT ELEMENT IS: ", this.threeRootElement);
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="terrain-background" ref={element => this.threeRootElement = element}>
            	<div className='content-container'>
					<Title className="title"/>
				</div>
			</div>
        );
    }
}

export default HomePage;