import React from 'react';

import Card from 'react-toolbox/lib/card/Card';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

import Passphrase from '../../views/Passphrase';
import EncryptionModal from '../../views/EncryptionModal';

import APIactions from '../../actions/APIactions';
import dispatcher from '../../AppDispatcher';

const todaysDate = new Date(Date.now());
const minimumDate = new Date(todaysDate.setDate(todaysDate.getDate() - 1));

//  TODO: Take first letter of name to populate icon
//  TODO: Take passphrase component out
//  TODO: Take card styles out
//  TODO: Fix chevron icons of DatePicker
//  TODO: Take out console.logs()
//  TODO: Validate that inputs are filled before encrypting!

class Enigma extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      message: '',
      date: '',
      passphrase: '',
      dialogActive: false,
      encryptedMessage: '',
    };

    this.handlePassphrase = this.handlePassphrase.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onAction = this.onAction.bind(this);
  }

  componentWillMount() {
    this.dispatcherRef = dispatcher.register(this.onAction);
  }

  componentWillUnmount() {

  }

  onAction(action) {
    switch (action.type) {
      case 'RECEIVE_ENCRYPTED_MESSAGE':
        console.log('action.type: ', action.type);
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

  handleChange(type, val) {
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
      sender: this.state.name,
      message: this.state.message,
      expirationDate: this.state.date,
      key: this.state.passphrase,
    };
    APIactions.encryptMessage(encryptionPackage);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '350px', padding: '15px 15px 0px 15px' }}>
          Tovias Enigma
          <Input
            type="text"
            label="Name"
            value={this.state.name}
            required
            onChange={this.handleChange.bind(this, 'name')}
            icon={<Avatar icon={<span>{this.state.name[0]}</span>} />}
          />
          <Input
            type="text"
            label="Message"
            value={this.state.message}
            multiline
            required
            maxLength={120}
            onChange={this.handleChange.bind(this, 'message')}
          />
          <DatePicker
            label="Expiration date"
            minDate={minimumDate}
            onChange={this.handleChange.bind(this, 'date')}
            required
            value={this.state.date}
            sundayFirstDayOfWeek
          />
          <CardActions>
            <Button label="ENCRYPT" id="encrypt" onClick={this.handleToggle} />
            <Button label="DECRYPT" id="decrypt" onClick={this.handleToggle} />
          </CardActions>
        </Card>
        <EncryptionModal encryptedMessage={this.state.encryptedMessage} handleToggle={this.handleToggle} active={this.state.dialogActive} />
        <Passphrase handlePassphrase={this.handlePassphrase} />
      </div>
    );
  }
}

export default Enigma;
