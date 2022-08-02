import React from 'react';
import ReactDOM from 'react-dom';
import Index from './portfolioAlexMoreano';
import {ThemeProvider} from './components/toggle/toggleContext.js';

ReactDOM.render(
   <ThemeProvider>
     <Index />,
   </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
