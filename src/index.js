import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import "./src-list/index.css";
import AppList from "./src-list/AppList";
import reportWebVitals from "./src-list/reportWebVitals";

// styles
import './App.css';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
	<AppList />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

