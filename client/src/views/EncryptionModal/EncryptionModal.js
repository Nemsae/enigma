import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Input from 'react-toolbox/lib/input/Input';

//  TODO: Prop validation
class EncryptionModal extends React.Component {
  render() {
    const { active, handleToggle, handleChange, encryptedMessage } = this.props;
    const actions = [
      { label: 'CLOSE', id: 'toggle', onClick: handleToggle },
      { label: 'DECRYPT', id: 'decrypt', onClick: handleToggle },
    ];
    //  TODO: DECRYPT
    //      1. grab value in Message
    //      2. send action to backend with Date.now(), along with CipherText
    //      3. if date is later than expiration date, send message back that the message has either expired or is an invalid encrypted message
    return (
      <Dialog
        actions={actions}
        active={active}
        onEscKeyDown={handleToggle}
        onOverlayClick={handleToggle}
        title='De/Encrypt'
      >
        <Input
          type='text'
          label='Message'
          value={encryptedMessage}
          id='encryptedMessage'
          multiline
          required
          onChange={handleChange}
        />
      </Dialog>
    );
  }
}

export default EncryptionModal;
