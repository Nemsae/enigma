import React from 'react';

import Dialog from 'react-toolbox/lib/dialog/Dialog';

//  TODO: Prop validation
const ErrorModal = (props) => {
  const { errorMessage, active, handleErrorToggle } = props;
  const actions = [
    { label: 'CLOSE', id: 'toggle', onClick: handleErrorToggle },
  ];
  return (
    <Dialog
      actions={actions}
      active={active}
      onEscKeyDown={handleErrorToggle}
      onOverlayClick={handleErrorToggle}
      title='Error'
    >
      {errorMessage}
    </Dialog>
  );
};

export default ErrorModal;
