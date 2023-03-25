import { create, useModal } from '@ebay/nice-modal-react';
import { FormProvider, useForm } from 'react-hook-form';

import { IconEmail, IconPassword, IconPerson } from '@/components/icons';
import { BlueButton, Input } from '@/components/ui';
import TemplateModal from './../index';

import { Form } from './../style';
import { patterns } from '@/helpers/patterns';
import { MODALS } from '../register';
import { AuthService } from '@/services/user';
import { loginUserAction } from '@/store/actions/user';

const RegistrationModal = create(({ id }) => {
  const { hide, visible } = useModal(id);
  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit, reset } = methods;
  const { show: showLogin } = useModal(MODALS.LOGIN);

  const onSubmit = async (data) => {
    try {
      console.log('🚀 ~ file: index.jsx:11 ~ onSubmit ~ data:', data);
      const user = await AuthService.register(data);
      loginUserAction({ token: user.token, userID: user.userId, isAuth: true });
      reset();
      hide();
    } catch (e) {
      console.error(e);
    }
  };

  const switchModal = () => {
    hide();
    showLogin();
  };

  return (
    <TemplateModal
      open={visible}
      close={hide}
      title="Sing up"
    >
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            title="Username"
            iconFront={<IconPerson />}
            placeholder={'Username'}
            rules={{
              required: true,
              maxLength: 25,
            }}
            name="username"
          />
          <Input
            title={'Email'}
            name="email"
            inputMode="email"
            iconFront={<IconEmail />}
            placeholder="Email"
            rules={{
              required: true,
              pattern: {
                value: patterns.email,
                message: 'Email in correct format',
              },
            }}
          />
          <Input
            iconFront={<IconPassword />}
            password="true"
            title="Password"
            placeholder={'Password'}
            rules={{
              required: true,
              pattern: {
                value: patterns.password,
                message:
                  'Password must contain upper, lower case letters, numbers and special characters',
              },
            }}
            name="password"
          />
          <span className="crumbs">
            Already have an account?
            <b onClick={() => switchModal()}> Sign in</b>
          </span>

          <BlueButton type={'submit'}>Submit</BlueButton>
        </Form>
      </FormProvider>
    </TemplateModal>
  );
});

export default RegistrationModal;
