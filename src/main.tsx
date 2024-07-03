import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './main.scss';
import './assets/styles/fonts.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
