import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  sendEncrpytion(encryptionPackage) {
    // console.log('encryptionPackage:API.js ', encryptionPackage);
    axios.post('/api/enigma', encryptionPackage)
    .then((res) => {
      const encryptedMessage = res.data;
      console.log('encryptedMessage: ', encryptedMessage);
      ServerActions.sendEncryptedMessage(encryptedMessage);
    })
    .catch((err) => {
      console.log('err: ', err);  // eslint-disable-line no-console
    });
  },
};

export default API;
