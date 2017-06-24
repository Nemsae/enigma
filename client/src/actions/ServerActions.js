import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  sendEncryptedMessage(encryptedMessage) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ENCRYPTED_MESSAGE',
      payload: encryptedMessage,
    });
  },
  sendDecryptionSuccess(decryptedPackage) {
    console.log('decryptedPackage: ', decryptedPackage);
    AppDispatcher.dispatch({
      type: 'RECEIVE_DECRYPTION_SUCCESS',
      payload: decryptedPackage,
    });
  },
  sendDecryptionError(errorType) {
    console.log('errorType: ', errorType);
    AppDispatcher.dispatch({
      type: 'RECEIEVE_DECRYPTION_ERROR',
      payload: errorType,
    });
  },
};

export default ServerActions;
