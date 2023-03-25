import React from 'react';
import Modal from 'react-modal';
import { IconClose } from '@/components/icons';
import { Wrapper, Column, Container, Title, CloseBtn } from './style';

const TemplateModal = ({ children, open, close, title }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Wrapper onClick={close}>
        <Column>
          <Container onClick={(e) => e.stopPropagation()}>
            <CloseBtn
              type="button"
              onClick={close}
            >
              <IconClose />
            </CloseBtn>
            <Title>{title}</Title>
            {children}
          </Container>
        </Column>
      </Wrapper>
    </Modal>
  );
};

export default TemplateModal;
