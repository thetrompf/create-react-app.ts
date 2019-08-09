import React from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React Again!
                </a>{' '}
                <br />
                <a
                    className="App-link"
                    href="https://reactjs.org/docs/hooks-intro.html"
                    target="_blank"
                    rel="noopener noreferrer">
                    Now with Hooks!
                </a>
            </header>
        </div>
    );
};

export default hot(module)(App);
