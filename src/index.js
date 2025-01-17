import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './Robots';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <CardList robots={robots}/>
  );
reportWebVitals();

