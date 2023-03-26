import { Provider } from 'react-redux';
import { useEffect } from 'react';
import NiceModal from '@ebay/nice-modal-react';

import Footer from './footer';
import Header from './header';
import { loginUserAction } from '@/store/actions/user';
import { useUser } from '@/store/selectors';
import { AuthService } from '@/services/user';

import { Wrapper, Container } from './style';

const Layout = ({ children }) => {
  const { token } = useUser();
  useEffect(() => {
    const load = () => {
      AuthService.checkToken(token)
        .then(function (response) {
          loginUserAction(response);
        })
        .catch(function (error) {
          loginUserAction(error);
        });
    };
    load();
  }, []);

  return (
    <NiceModal.Provider>
      <Container>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </Container>
    </NiceModal.Provider>
  );
};

export default Layout;
