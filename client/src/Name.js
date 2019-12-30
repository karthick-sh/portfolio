import React, { Component } from 'react';
import ListRevealer from './ListRevealer';


class Name extends Component {
    
    componentDidMount() {
        
    }

    render () {
    	var reveal_list = [
			  'researcher',
			  'software developer.',
			  'hacker.',
		      'graphic designer.',
		      'technology enthusiast.'
		    ];
        return (
        	<div className='landing-page'>
        			<h1 className="title-word" id="fname">Karthick</h1>
        			<h1 className="title-word" id="lname">Shankar</h1>
        			<div className="designation-box"><h2>is a </h2><ListRevealer reveal_list={reveal_list} /></div>
           	</div>
        );

    }
}

export default Name;