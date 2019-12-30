import React, { Component } from 'react';

import threeEntryPoint from "./threejs/threeEntryPoint"

class Background extends Component {
    
    componentDidMount() {
        //console.log("THE ROOT ELEMENT IS: ", this.threeRootElement);
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div className="terrain-background" ref={element => this.threeRootElement = element}>
			</div>
        );
    }
}

export default Background;