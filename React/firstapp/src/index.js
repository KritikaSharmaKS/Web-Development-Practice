import React from 'react';//main robot that does the work, a view library.
import ReactDOM from 'react-dom';//works specifically for browsers. React native for mobile phones.
import './index.css'; //'./ says it is in the same directory.'
import App from './App';//if no extension consider it a js file.
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';//allows our app to work faster offline
import 'tachyons';

ReactDOM.render(<Hello greeting={'Hello KS'+', Welcome to React!:)'} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
