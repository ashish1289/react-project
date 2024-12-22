import React from 'react';
import './App.css';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';

function App() {
    return (
        <CounterProvider>
            <div className="App">
                <Counter />
            </div>
        </CounterProvider>
    );
}

export default App;