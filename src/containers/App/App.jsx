import React, { useState } from 'react';
import Background from '../../components/Background/Background';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ResearchPage from '../ResearchPage/ResearchPage';
import WorkPage from '../WorkPage/WorkPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import Navbar from '../../components/Navbar/Navbar';

import './App.css';

const PAGE_COMPONENTS = {
  home: HomePage,
  about: AboutPage,
  research: ResearchPage,
  work: WorkPage,
  projects: ProjectsPage,
};

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const PageComponent = PAGE_COMPONENTS[activePage];

  return (
    <div className='container'>
      <Background />
      <Navbar activePage={activePage} onNav={setActivePage} />
      <PageComponent />
    </div>
  );
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
