import React, { Component } from 'react';
import ListRevealer from './ListRevealer';


class Title extends Component {
    
    componentDidMount() {
        
    }

    render () {
    	var reveal_list = [
		      'hacker.',
		      'software developer.',
		      'graphic designer.',
		      'technology enthusiast.'
		    ];
        return (
        	<div className='landing-page'>
        			<div className="title-box"><h1 className="title-word" id="fname">Karthick</h1></div>
        			<div className="title-box"><h1 className="title-word" id="lname">Shankar</h1></div>
        			<div className="designation-box"><h2>is a </h2><ListRevealer reveal_list={reveal_list} /></div>
           	</div>
        );

    }
}

export default Title;