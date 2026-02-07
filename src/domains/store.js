/**
 * Pure Functional Store Implementation
 * Mimics the Redux pattern without dependencies.
 */

export const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
        return action;
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) listeners.splice(index, 1);
        };
    };

    dispatch({ type: '@@INIT/Investors' });
    return { getState, dispatch, subscribe };
};

export const combineReducers = (reducers) => {
    const reducerKeys = Object.keys(reducers);
    return (state = {}, action) => {
        const nextState = {};
        let hasChanged = false;
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
};
