import Footer from './footer';
import Header from './header';
import { Wrapper, Container } from './style';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
