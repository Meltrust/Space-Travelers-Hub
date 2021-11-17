import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid min-vh-100 bg-light">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
