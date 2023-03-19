import React from 'react';
import { useRouter } from 'next/router';

import { IconLogo } from '@/components/icons';

import { Wrapper, Row, Logo, Navigations, Item, Group } from './style';
import { navigations } from '../data';
import { BlueButton } from '@/components/ui';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper>
      <Row>
        <Logo>
          <IconLogo className="header-logo" />
        </Logo>
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
        <Group>
          <BlueButton title="sign in">Sign in</BlueButton>
          <BlueButton
            title="sign up"
            outline
          >
            Sign up
          </BlueButton>
        </Group>
      </Row>
    </Wrapper>
  );
};

export default Header;
