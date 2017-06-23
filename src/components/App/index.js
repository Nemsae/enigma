import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import theme from '../../assets/react-toolbox/theme';
// import theme from '../../assets/react-toolbox/theme.css';
import Enigma from '../Enigma';


class App extends Component {
  // render() {
  //   return (
  //     <div>
  //       <Enigma />
  //     </div>
  //   );
  // }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Enigma />
      </ThemeProvider>
    );
  }
}

export default App;
