import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '/home/gcamoin/phase-5-project/client/src/components/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "/home/gcamoin/phase-5-project/client/src/components/contexts/UserContext.js"
// import {GenreProvider} from "/home/gcamoin/phase-5-project/client/src/components/contexts/GenreContext.js"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <GenreProvider> */}
        <App />
        {/* </GenreProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
