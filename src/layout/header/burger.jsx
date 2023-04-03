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
import { IconClose, IconLogo, IconPerson } from '@/components/icons';
import { navigations } from '../data';
import { useRouter } from 'next/router';
import { BlueButton } from '@/components/ui';
import { MODALS } from '@/components/modals/register';
import { useModal } from '@ebay/nice-modal-react';

const Menu = ({ open, close, isAuth }) => {
  const { pathname } = useRouter();
  const { show: showLogin } = useModal(MODALS.LOGIN);
  const { show: showRegistration } = useModal(MODALS.REGISTRATION);

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
                  active={pathname === '/profile'}
                  href={'/profile'}
                >
                  <IconPerson size={26} />
                  Profile
                </Item>
              </>
            )}
          </Navigation>
          <Group>
            {isAuth ? (
              <BlueButton className="log-out">Log Out</BlueButton>
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
