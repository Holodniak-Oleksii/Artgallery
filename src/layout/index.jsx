import NiceModal from '@ebay/nice-modal-react';

import Footer from './footer';
import Header from './header';

import { Wrapper, Container } from './style';

const Layout = ({ children }) => {
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
