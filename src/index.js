import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
