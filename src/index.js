import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import { alumni } from './profile';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Card id={alumni[0].id} name={alumni[0].name} email={alumni[0].email}/>
    <Card id={alumni[1].id} name={alumni[1].name} email={alumni[1].email}/>
    <Card id={alumni[2].id} name={alumni[2].name} email={alumni[2].email}/>
  </div>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
