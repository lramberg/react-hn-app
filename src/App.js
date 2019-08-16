import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route  exact path='/' render={() => 
                    <HomePage />
                } />
            </Switch>
        </div>
    );
}

export default App;
