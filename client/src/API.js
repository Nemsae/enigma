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
    console.log('decryptionPackage:API.js ', decryptionPackage);
    // axios.get('/api/enigma', decryptionPackage)
    // axios.get('/api/enigma', {
    //   params: {
    //     ID: 12345,
    //   },
    // })
    axios.get('/api/enigma', {
      params: decryptionPackage,
    })
    .then((res) => {
      const decryptedMessage = res.data;
      console.log('decryptedMessage: ', decryptedMessage);
      // ServerActions.sendDecryptedMessage(decryptedMessage);
    })
    .catch((err) => {
      console.log('err: ', err);  // eslint-disable-line no-console
    });
  },
};

export default API;
