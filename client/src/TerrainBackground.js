import React, { Component } from 'react';

import threeEntryPoint from "./threejs/threeEntryPoint"
import "./TerrainBackground.css"
import Title from './Title'

class TerrainBackground extends Component {
    
    componentDidMount() {
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

export default TerrainBackground;