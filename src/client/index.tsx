// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom'

import App from './App';

// const initialState = window.__INITIAL_STATE__;

// const reactRenderer = () => {
//   const mainNode = document.querySelector("#app");
//   const hasHTML = mainNode?.textContent;

//   if (hasHTML) {
//     ReactDOM.hydrate(<App {...initialState.props} />, mainNode)
//     return
//   }
//   ReactDOM.render(<App {...initialState.props}  />, mainNode)
//   return
// }
// reactRenderer();

const mainNode = document.querySelector("#app");

ReactDOM.render(<App />, mainNode)

