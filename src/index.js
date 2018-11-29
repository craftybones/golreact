import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const coords=[ [ 1, 5 ],
[ 1, 11 ],
[ 2, 5 ],
[ 2, 11 ],
[ 3, 5 ],
[ 3, 6 ],
[ 3, 10 ],
[ 3, 11 ],
[ 5, 1 ],
[ 5, 2 ],
[ 5, 3 ],
[ 5, 6 ],
[ 5, 7 ],
[ 5, 9 ],
[ 5, 10 ],
[ 5, 13 ],
[ 5, 14 ],
[ 5, 15 ],
[ 6, 3 ],
[ 6, 5 ],
[ 6, 7 ],
[ 6, 9 ],
[ 6, 11 ],
[ 6, 13 ],
[ 7, 5 ],
[ 7, 6 ],
[ 7, 10 ],
[ 7, 11 ],
[ 9, 5 ],
[ 9, 6 ],
[ 9, 10 ],
[ 9, 11 ],
[ 10, 3 ],
[ 10, 5 ],
[ 10, 7 ],
[ 10, 9 ],
[ 10, 11 ],
[ 10, 13 ],
[ 11, 1 ],
[ 11, 2 ],
[ 11, 3 ],
[ 11, 6 ],
[ 11, 7 ],
[ 11, 9 ],
[ 11, 10 ],
[ 11, 13 ],
[ 11, 14 ],
[ 11, 15 ],
[ 13, 5 ],
[ 13, 6 ],
[ 13, 10 ],
[ 13, 11 ],
[ 14, 5 ],
[ 14, 11 ],
[ 15, 5 ],
[ 15, 11 ] ];
ReactDOM.render(<App gen={coords}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
