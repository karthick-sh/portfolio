import React from 'react';
import './Name.css'


const Name = (props) => {
	const {firstName, lastName} = props;
	return (
		<div className='name__container'>
			<h1 className="name__word" id="firstName">{firstName}</h1>
			<h1 className="name__word" id="lastName">{lastName}</h1>
		</div>
	)
}


export default Name;