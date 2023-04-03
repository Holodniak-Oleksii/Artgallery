import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-size: 42px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }
`;
