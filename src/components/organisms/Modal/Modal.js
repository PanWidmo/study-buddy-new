import React from 'react';
import { Wrapper } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <Wrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </Wrapper>
  );
};

export default Modal;
