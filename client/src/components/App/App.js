import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Layout from 'react-toolbox/lib/layout/Layout';

import theme from '../../assets/react-toolbox/theme';
import Enigma from '../Enigma';

/*  Stylesheet */
import style from './styles';

//  Passup passphrase to here
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout style={style.wrapper}>
          <Enigma />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
