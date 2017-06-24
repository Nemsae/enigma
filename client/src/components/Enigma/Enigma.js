import React from 'react';
import createHistory from 'history/createBrowserHistory';

/* Views */
import EncryptionModal from '../../views/EncryptionModal';
import EnigmaCard from '../../views/EnigmaCard';
import Passphrase from '../../views/Passphrase';

import APIactions from '../../actions/APIactions';
import dispatcher from '../../AppDispatcher';

//  TODO: Implement spinner/loader
//  TODO: Replace alerts with material suggestions
//  TODO: Fix chevron icons of DatePicker
//  TODO: Take out console.logs()
//  TODO: Validate that inputs are filled before encrypting!

const history = createHistory();

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
    const location = this.props.location.pathname;
    const currPassphrase = location.split('/');
    if (currPassphrase.length === 2) {
      this.setState({ passphrase: currPassphrase[1] });
    }
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
      case 'RECEIVE_DECRYPTION_SUCCESS':
        this.setState({
          message: action.payload.message,
          sender: action.payload.sender,
          expirationDate: action.payload.expirationDate,
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
    history.push(`/${passphrase}`);
    this.setState({ passphrase });
  }

  handleToggle(e) {
    const id = e.target.id;
    const { sender, message, date, passphrase, encryptedMessage } = this.state;
    switch (id) {
      case 'encrypt':
        if (sender === '' || message === '' || date === '') {
          alert('ERROR: fill in all required fields');
        } else {
          this.sendEncryptionRequest();
          this.setState({ dialogActive: !this.state.dialogActive });
        }
        break;
      case 'decrypt':
        if (encryptedMessage === '') {
          alert('ERROR: Encrypted Message cannot be empty');
        } else {
          this.sendDecryptionRequest();
          this.setState({ dialogActive: !this.state.dialogActive });
        }
        break;
      case 'toggle':
        this.setState({ dialogActive: !this.state.dialogActive });
        break;
      default:
    }
  }

  sendEncryptionRequest() {
    const encryptionPackage = {
      sender: this.state.sender,
      message: this.state.message,
      expirationDate: this.state.date,
      key: this.state.passphrase,
    };
    APIactions.encryptMessage(encryptionPackage);
  }

  sendDecryptionRequest() {
    const decryptionPackage = {
      currentDate: Date.now(),
      key: this.state.passphrase,
      encryptedMessage: this.state.encryptedMessage,
    };
    APIactions.decryptMessage(decryptionPackage);
  }

  render() {
    return (
      <div>
        <EnigmaCard
          sender={this.state.sender}
          message={this.state.message}
          date={this.state.date}
          handleToggle={this.handleToggle}
          handleChange={this.handleChange}
        />
        <EncryptionModal
          encryptedMessage={this.state.encryptedMessage}
          handleToggle={this.handleToggle}
          handleChange={this.handleChange}
          active={this.state.dialogActive}
        />
        <Passphrase
          passphrase={this.state.passphrase}
          handlePassphrase={this.handlePassphrase}
        />
      </div>
    );
  }
}

export default Enigma;
