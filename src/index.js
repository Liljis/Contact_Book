import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// like wise we have HashRouter which works similar to BrowserRouter but the url will not get changed there will be a # symbol after the main url
// http://localhost:3000/#/Home
// unstable_HistoryRouter this will keep the url history
// MemoryRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

