import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '@ebay/nice-modal-react';

import { IconBurger, IconLogo } from '@/components/icons';
import { BlueButton } from '@/components/ui';

import {
  Wrapper,
  Row,
  Logo,
  Navigations,
  Item,
  Group,
  AccountBtn,
} from './style';

import { navigations } from '../data';
import { MODALS } from '@/components/modals/register';
import { useUser } from '@/store/selectors';
import Account from './account';
import {
  LittleMobileOff,
  LittleMobileOn,
  MobileOff,
  MobileOn,
} from '@/helpers/responsive';
import Menu from './burger';

const Header = () => {
  const { pathname } = useRouter();
  const { show: showLogin } = useModal(MODALS.LOGIN);
  const { show: showRegistration } = useModal(MODALS.REGISTRATION);
  const { isAuth, isLoading } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Row>
        <Logo href="/">
          <IconLogo className="header-logo" />
        </Logo>
        <LittleMobileOff>
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
        </LittleMobileOff>
        <LittleMobileOn>
          <AccountBtn onClick={() => setOpen(!open)}>
            <IconBurger />
          </AccountBtn>
          <Menu
            isAuth={isAuth}
            open={open}
            close={() => setOpen(false)}
          />
        </LittleMobileOn>
      </Row>
    </Wrapper>
  );
};

export default Header;
