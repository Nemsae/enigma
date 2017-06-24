import React from 'react';
import generatePassword from 'password-generator';
import copy from 'copy-to-clipboard';

import style from './styles';

class Passphrase extends React.Component {
  constructor() {
    super();

    this.state = {
      passphrase: '',
    };

    this.createNewPassphrase = this.createNewPassphrase.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  componentWillMount() {
    if (this.props.passphrase !== '') {
      this.setState({ passphrase: this.props.passphrase });
    } else {
      this.createNewPassphrase();
    }
  }

  createNewPassphrase(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    const passphrase = generatePassword(5, false);
    this.props.handlePassphrase(passphrase);
    this.setState({ passphrase });
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  copyToClipboard(e) {
    const { passphrase } = this.state;
    e.preventDefault();
    copy(passphrase);
  }

  render() {
    const { passphrase } = this.state;
    //  BUG: Tooltip throws error 'A valid react component must be returned...etc'
    return (
      <div style={style.container}>
        Your Passphrase - <a href='' style={style.link} onClick={this.copyToClipboard}>{passphrase}</a>
        {/* <div style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Your Passphrase -
          <TooltipLink href='#' style={{ textDecoration: 'none', color: 'blue', marginLeft: '.5em' }} label={passphrase} tooltip='Click to copy to clipboard' onClick={this.copyToClipboard} />
        </div> */}
        <br />
        <br />
        <a href='' style={style.link} onClick={this.createNewPassphrase}>
          Generate new Passphrase
        </a>
      </div>
    );
  }
}

export default Passphrase;
