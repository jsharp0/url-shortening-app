import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Footer from './footer/Footer';
import reportWebVitals from './reportWebVitals';
import './custom.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './header/Header';
import { LinkShortener } from './link-shortener/LinkShortener';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <LinkShortener />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
