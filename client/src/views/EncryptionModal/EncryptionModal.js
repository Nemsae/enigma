import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Input from 'react-toolbox/lib/input/Input';

//  TODO: Prop validation
const EncryptionModal = (props) => {
  const { active, handleEncryptionToggle, handleChange, encryptedMessage } = props;
  const actions = [
    { label: 'CLOSE', id: 'toggle', onClick: handleEncryptionToggle },
    { label: 'DECRYPT', id: 'decrypt', onClick: handleEncryptionToggle },
  ];
  return (
    <Dialog
      actions={actions}
      active={active}
      onEscKeyDown={handleEncryptionToggle}
      onOverlayClick={handleEncryptionToggle}
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
};

export default EncryptionModal;
