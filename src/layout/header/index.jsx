import React from 'react';
import { useRouter } from 'next/router';
import { useModal } from '@ebay/nice-modal-react';

import { IconLogo } from '@/components/icons';
import { BlueButton } from '@/components/ui';

import { Wrapper, Row, Logo, Navigations, Item, Group } from './style';

import { navigations } from '../data';
import { MODALS } from '@/components/modals/register';
import { useUser } from '@/store/selectors';
import Account from './account';

const Header = () => {
  const { pathname } = useRouter();
  const { show: showLogin } = useModal(MODALS.LOGIN);
  const { show: showRegistration } = useModal(MODALS.REGISTRATION);
  const { isAuth, isLoading } = useUser();
  return (
    <Wrapper>
      <Row>
        <Logo href="/">
          <IconLogo className="header-logo" />
        </Logo>
        {!isLoading && (
          <>
            <Navigations>
              {navigations.map((item) => (
                <Item
                  active={pathname === item.path}
                  key={item.id}
                  href={item.path}
                >
                  {item.name}
                </Item>
              ))}
            </Navigations>
            {isAuth ? (
              <Account />
            ) : (
              <Group>
                <BlueButton
                  title="sign in"
                  onClick={() => showLogin()}
                >
                  Sign in
                </BlueButton>
                <BlueButton
                  title="sign up"
                  onClick={() => showRegistration()}
                  outline
                >
                  Sign up
                </BlueButton>
              </Group>
            )}
          </>
        )}
      </Row>
    </Wrapper>
  );
};

export default Header;
