import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass';
import HelloWorld from './HelloWorld';
import './AppClass.css';
import './HelloWorld.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
        <HelloWorld />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
