import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  sendEncryptedMessage(encryptedMessage) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ENCRYPTED_MESSAGE',
      payload: encryptedMessage,
    });
  },
};

export default ServerActions;
