import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store'
import {addGuess,restartGame} from './actions'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



console.log('state is ',store.getState());


store.dispatch(addGuess(4));
store.dispatch(addGuess(99));
store.dispatch(addGuess(1));
console.log('state is ',store.getState());
store.dispatch(restartGame());
console.log('state is end',store.getState());
