import { createStore } from 'redux';
import jokeReducers from './reducers/jokeReducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const Store = () => createStore (
    jokeReducers,
    composeWithDevTools()
);

export default Store;