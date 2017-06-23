import API from '../API';

const APIActions = {
  encryptMessage(encryptionPackage) {
    API.sendEncrpytion(encryptionPackage);
  },
};

export default APIActions;
