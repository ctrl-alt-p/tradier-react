import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.
// This component should produce some html.
const App = () => {
  return <div>H1!</div>;
};

// Takes this component's generated HTML and out it on the page (in the DOM)
ReactDOM.render(
  <App/>, document.querySelector('.container'));
