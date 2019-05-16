import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import HelloBlue from './shadersTest'
import Header from './Header'
import * as serviceWorker from './serviceWorker';
//import { Surface } from "gl-react-dom"; // for Node.js!


ReactDOM.render(
	//<Surface className='container-gl'>
  	//	<HelloBlue blue={0.5} />
	//</Surface>
	//<HelloBlue blue={0.5}/>
	<Header />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
