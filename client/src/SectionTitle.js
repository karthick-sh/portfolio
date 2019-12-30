import React, { Component } from 'react';


class SectionTitle extends Component {
    
    componentDidMount() {
        
    }

    render () {
        return (
            <div className="section-title-container">
        <div className="section-title-box"><h1 className="section-title-word red-shadow">{this.props.title}</h1></div>
            </div>
        );

    }
}

export default SectionTitle;