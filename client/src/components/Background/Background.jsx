import React, { useEffect, useRef } from 'react';
import threeEntryPoint from "./ThreeJS/threeEntryPoint"

import './Background.css';

const Background = () => {
    const rootElement = useRef(null);
    useEffect(() => {
        threeEntryPoint(rootElement);
    });

    return (
        <div className="terrain-background" ref={rootElement}></div>
    )
}

export default Background;