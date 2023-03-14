import styled from "styled-components";

export const Wrapper = styled.section`
  display: block;
  width: 100%;
  position: relative;
  z-index: 2;
  ${(props) => !props.visible && `overflow: hidden;`}
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px 100px 60px 100px;
  @media screen and (max-width: 1440px) {
    padding: 20px 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 32px;
  }
  @media screen and (max-width: 540px) {
    padding: 32px 16px;
  }
`;

const Container = ({ children, visible }) => (
  <Wrapper visible={visible} className='container'>
    {children}
  </Wrapper>
);

export default Container;
