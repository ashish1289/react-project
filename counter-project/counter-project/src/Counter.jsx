import React from 'react';
import { useCounterState, useCounterDispatch } from './CounterContext';

const Counter = () => {
    const { count } = useCounterState();
    const dispatch = useCounterDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default Counter;