import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { Wrapper } from "./style";

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer/>
      </>
  );
};

export default Layout