import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import theme from './assets/react-toolbox/theme.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

// import './index.css';
// import Layout from 'react-toolbox/lib/layout/Layout';

// ReactDOM.render(
//     <App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
