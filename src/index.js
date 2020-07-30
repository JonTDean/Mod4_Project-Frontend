import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './CSS/index.css';
import './CSS/custom.scss';
import '../node_modules/startbootstrap-agency/dist/css/styles.css'
import App from './components/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
