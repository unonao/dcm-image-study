import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// public/index.html 内にある <div id="root"></div> (ルート DOM ノード) に src/App.js 内の App をレンダーする(描画する)
// https://ja.reactjs.org/docs/rendering-elements.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// StrictModeについて: https://ja.reactjs.org/docs/strict-mode.html


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
