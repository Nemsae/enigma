import React from 'react';

/* Views */
import EncryptionModal from '../../views/EncryptionModal';
import EnigmaCard from '../../views/EnigmaCard';
import Passphrase from '../../views/Passphrase';

import APIactions from '../../actions/APIactions';
import dispatcher from '../../AppDispatcher';

//  TODO: Implement spinner/loader
//  TODO: Take card styles out
//  TODO: Fix chevron icons of DatePicker
//  TODO: Take out console.logs()
//  TODO: Validate that inputs are filled before encrypting!

class Enigma extends React.Component {
  constructor() {
    super();

    this.state = {
      sender: '',
      message: '',
      date: '',
      passphrase: '',
      dialogActive: false,
      encryptedMessage: '',
    };

    this.handlePassphrase = this.handlePassphrase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onAction = this.onAction.bind(this);
  }

  componentWillMount() {
    this.dispatcherRef = dispatcher.register(this.onAction);
  }

  componentWillUnmount() {
    //  Ideally would unmount dispatcher, but this app wouldn't need too
  }

  onAction(action) {
    switch (action.type) {
      case 'RECEIVE_ENCRYPTED_MESSAGE':
        this.setState({
          encryptedMessage: action.payload,
        });
        break;
      default:
        this.setState({
          encryptedMessage: '',
        });
    }
  }

  handleChange(val, e) {
    let type = '';
    if (e === undefined) {
      type = 'date';
    } else {
      type = e.target.id;
    }
    this.setState({ [type]: val });
  }

  handlePassphrase(passphrase) {
    this.setState({ passphrase });
  }

  handleToggle(e) {
    const id = e.target.id;
    if (id === 'encrypt') {
      this.sendEncrpytionRequest();
    }
    this.setState({ dialogActive: !this.state.dialogActive });
  }

  sendEncrpytionRequest() {
    const encryptionPackage = {
      sender: this.state.sender,
      message: this.state.message,
      expirationDate: this.state.date,
      key: this.state.passphrase,
    };
    APIactions.encryptMessage(encryptionPackage);
  }

  render() {
    return (
      <div>
        <EnigmaCard
          sender={this.state.sender}
          message={this.state.message}
          date={this.state.date}
          handleChange={this.handleChange}
          handleToggle={this.handleToggle}
        />
        <EncryptionModal
          encryptedMessage={this.state.encryptedMessage}
          handleToggle={this.handleToggle}
          active={this.state.dialogActive}
        />
        <Passphrase handlePassphrase={this.handlePassphrase} />
      </div>
    );
  }
}

export default Enigma;
