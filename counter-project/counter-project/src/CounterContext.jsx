import React, { createContext, useReducer, useContext } from 'react';

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    
    return (
        <CounterStateContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterStateContext.Provider>
    );
};

export const useCounterState = () => useContext(CounterStateContext);
export const useCounterDispatch = () => useContext(CounterDispatchContext);