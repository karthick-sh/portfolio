import React from 'react';
import Background from 'components/Background/Background';
import HomePage from 'containers/HomePage/HomePage';
// import AboutPage from 'containers/AboutPage/AboutPage';

import './App.css';

const App = () => {
  return (  
    <div className='container'>
      <Background />
      <HomePage />
      {/* <AboutPage /> */}
    </div>
  )
}
 
// class App extends Component {
//   // Initialize state 
//   state = { words: "WORD", snake_pos_x: 0, snake_pos_y: 0 }

//   // Fetch passwords after first mount
//   componentDidMount() {
//     this.getWords();
//   }

//   getWords() {
//     fetch('/hello')
//       .then((responseText) => responseText.json())
//       .then((response) => this.setState({words: response.thing}));
//   }

//   render() {
//     console.log(this.state.words)
//     //WORKS!!
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React with {this.state.words}
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
