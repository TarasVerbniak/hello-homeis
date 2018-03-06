import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

const store = createStore(reducers);

const render = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    render(), 
    document.getElementById('root')
);
registerServiceWorker();
