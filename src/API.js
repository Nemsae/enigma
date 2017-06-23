import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  sendEncrpytion(encryptionPackage) {
    console.log('encryptionPackage:API.js ', encryptionPackage);
    // axios.post('/api/enigma', encryptionPackage)
    //   .then((res) => {
    //     console.log('res: ', res);
    //   })
    //   .catch((err) => {
    //     console.log('err: ', err);
    //   });
  },
  // receiveSearchResults(searchTerm) {
  //   axios.get(`https://kitsu.io/api/edge//anime?filter[text]=${searchTerm}`, {
  //     headers : {
  //       'Accept': 'application/vnd.api+json',
  //       'Content-Type': 'application/vnd.api+json'
  //     }
  //   })
  //   .then((res) => {
  //     ServerActions.receiveSearchResults(res.data.data);
  //   })
  //   .catch((err) => {
  //     console.log('ERROR! API.receiveSearchResults', err);
  //   });
  // },
};

export default API;
