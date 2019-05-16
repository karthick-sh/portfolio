import React, { Component } from 'react';

import threeEntryPoint from "./threejs/threeEntryPoint"
import "./TerrainBackground.css"

class TerrainBackground extends Component {
    
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="terrain-background" ref={element => this.threeRootElement = element} />
        );
    }
}

export default TerrainBackground;