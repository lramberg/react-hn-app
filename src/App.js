import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import HomePage from './pages/HomePage/HomePage';
import HackerNews from './pages/HackerNews/HackerNews';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route  exact path='/' render={() => 
                    <HomePage />
                } />
                <Route exact path='/hacker-news' render={() => 
                    <HackerNews />
                } />
            </Switch>
        </div>
    );
}

export default App;
