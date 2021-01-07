import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/material-kit-react.scss?v=1.9.0';
import ScrollToTop from './components/Croll/ScrollToTop';

ReactDOM.render(
  <div>
    <BrowserRouter basename="/vn">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
reportWebVitals();
