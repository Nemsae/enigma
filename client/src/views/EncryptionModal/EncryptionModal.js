import React from 'react';
// import Dialog from 'react-toolbox/lib/dialog';
// import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Input from 'react-toolbox/lib/input/Input';

//  TODO: Prop validation
class EncryptionModal extends React.Component {
  render() {
    const { active, handleToggle, encryptedMessage } = this.props;
    const actions = [
      { label: 'CLOSE', onClick: handleToggle },
      { label: 'DECRYPT', onClick: handleToggle },
    ];
    //  TODO: DECRYPT
    //      1. grab value in Message
    //      2. send action to backend with Date.now(), along with CipherText
    //      3. if date is later than expiration date, send message back that the message has either expired or is an invalid encrypted message
    return (
      <div>
        <Dialog
          actions={actions}
          active={active}
          onEscKeyDown={handleToggle}
          onOverlayClick={handleToggle}
          title="De/Encrypt"
        >
          <Input
            type="text"
            label="Message"
            value={encryptedMessage}
            multiline
            required
            // onChange={this.handleChange.bind(this, 'message')}
          />
        </Dialog>
      </div>
    );
  }
}

export default EncryptionModal;
