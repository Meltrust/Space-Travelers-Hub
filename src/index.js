import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container-fluid min-vh-100 bg-light">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
