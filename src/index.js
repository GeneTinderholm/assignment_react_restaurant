import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import barNav from './components/navbar';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
