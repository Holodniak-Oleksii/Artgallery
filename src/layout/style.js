import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-top: 80px;
  flex: 1 1 auto;
  @media screen and (max-width: 767px) {
    margin-top: 64px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
