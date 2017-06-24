import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  sendEncryption(encryptionPackage) {
    axios.post('/api/enigma', encryptionPackage)
    .then((res) => {
      const encryptedMessage = res.data;
      ServerActions.sendEncryptedMessage(encryptedMessage);
    })
    .catch((err) => {
      console.log('err: ', err);  // eslint-disable-line no-console
    });
  },
  sendDecryption(decryptionPackage) {
    axios.get('/api/enigma', {
      params: decryptionPackage,
    })
    .then((res) => {
      const response = res.data;
      console.log('response:API.js ', response);
      // ServerActions.sendDecryptedMessage(decryptedMessage);
    })
    .catch((err) => {
      console.log('err: ', err);  // eslint-disable-line no-console
    });
  },
};

export default API;
