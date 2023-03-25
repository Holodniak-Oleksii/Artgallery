import NiceModal from '@ebay/nice-modal-react';
import LoginModal from './login';
import RegistrationModal from './registration';

export const MODALS = {
  LOGIN: 'LOGIN',
  REGISTRATION: 'REGISTRATION',
};

// NiceModal.register(REGISTRATION, REGISTRATION);
NiceModal.register(MODALS.LOGIN, LoginModal);
NiceModal.register(MODALS.REGISTRATION, RegistrationModal);
