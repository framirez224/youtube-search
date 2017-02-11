import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should
// produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take this component generated HTML and put it in
// the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
