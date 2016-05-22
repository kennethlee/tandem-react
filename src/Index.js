import React from 'react';
import ReactDOM from 'react-dom';

const Test = (props) =>
  <h1>{props.greeting}</h1>;

ReactDOM.render(<Test greeting="HELLLOO" />, document.querySelector('#gallery'));
