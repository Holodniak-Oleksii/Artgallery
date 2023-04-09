import { useModal } from '@ebay/nice-modal-react';
import { useRouter } from 'next/router';

import { useUser } from '@/store/selectors';
import { IconClose, IconLogo, IconPerson } from '@/components/icons';
import { BlueButton } from '@/components/ui';
import { MODALS } from '@/components/modals/register';
import { logoutUserAction } from '@/store/actions/user';

import { CloseBtn } from '@/components/style';
import {
  BurgerContainer,
  BurgerWrapper,
  Item,
  List,
  Logo,
  Row,
  Navigation,
  Group,
} from './style';

import { navigations } from '../data';

const Menu = ({ open, close, isAuth }) => {
  const { pathname, push } = useRouter();
  const { show: showLogin } = useModal(MODALS.LOGIN);
  const { show: showRegistration } = useModal(MODALS.REGISTRATION);
  const { userID } = useUser();

  return (
    <BurgerWrapper open={open}>
      <BurgerContainer>
        <Row className="header">
          <Logo
            href="/"
            onClick={close}
          >
            <IconLogo className="header-logo" />
          </Logo>
          <CloseBtn onClick={close}>
            <IconClose />
          </CloseBtn>
        </Row>
        <List>
          <Navigation>
            {navigations.map((item) => (
              <Item
                className="item"
                active={pathname === item.path}
                key={item.id}
                href={item.path}
                onClick={close}
              >
                {item.icon}
                {item.name}
              </Item>
            ))}
            {isAuth && (
              <>
                <Item
                  className="item"
                  active={pathname === '/create'}
                  href={'/create'}
                  onClick={close}
                >
                  <IconClose
                    large
                    revert
                  />
                  Create
                </Item>
                <Item
                  onClick={close}
                  className="item"
                  active={pathname.includes('/profile')}
                  href={`/profile/${userID}`}
                >
                  <IconPerson size={26} />
                  Profile
                </Item>
              </>
            )}
          </Navigation>
          <Group>
            {isAuth ? (
              <BlueButton
                className="log-out"
                onClick={() => {
                  logoutUserAction();
                  push('/');
                }}
              >
                Log Out
              </BlueButton>
            ) : (
              <>
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
              </>
            )}
          </Group>
        </List>
      </BurgerContainer>
    </BurgerWrapper>
  );
};

export default Menu;
