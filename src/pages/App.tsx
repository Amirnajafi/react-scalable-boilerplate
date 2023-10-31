import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import MainContext from '../providers/mainContext';

function App() {
  return (
    <div className="App">
      <MainContext>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Typescript / Eslint / Prettier / StoryBook / Husky setup
            Boilerplate test IDX Project number 2
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </MainContext>
    </div>
  );
}

export default App;
