import { create, useModal } from '@ebay/nice-modal-react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IconPassword, IconPerson } from '@/components/icons';
import { BlueButton, Input } from '@/components/ui';
import TemplateModal from './../index';
import { MODALS } from '@/components/modals/register';

import { Form } from './../style';
import { AuthService } from '@/services/user';
import { loginUserAction } from '@/store/actions/user';

const LoginModal = create(({ id }) => {
  const { hide, visible } = useModal(id);
  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit, reset } = methods;
  const { show: showRegistration } = useModal(MODALS.REGISTRATION);

  const onSubmit = async (data) => {
    try {
      const user = await AuthService.login(data);
      loginUserAction({ token: user.token, userID: user.userId, isAuth: true });
      hide();
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  const switchModal = () => {
    hide();
    showRegistration();
  };

  return (
    <TemplateModal
      open={visible}
      close={hide}
      title="Sing in"
    >
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            title="Username"
            iconFront={<IconPerson />}
            placeholder={'Username'}
            rules={{
              required: true,
            }}
            name="username"
          />
          <Input
            iconFront={<IconPassword />}
            password="true"
            title="Password"
            placeholder={'Password'}
            rules={{
              required: true,
            }}
            name="password"
          />
          <span className="crumbs">
            Do you have an account? <b onClick={() => switchModal()}>Sing up</b>
          </span>
          <BlueButton type={'submit'}>Submit</BlueButton>
        </Form>
      </FormProvider>
    </TemplateModal>
  );
});

export default LoginModal;
