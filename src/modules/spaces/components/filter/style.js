import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  .filter {
    max-width: 240px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    .filter {
      max-width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  min-height: 44px;
  height: 44px;
  width: 100%;
  position: relative;
  button {
    z-index: 3;
  }
  .field {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 8px;
    padding: 0 44px 0 44px;
    border: 1px solid #5e84ff;
    color: #3b66f1;
    outline: none;
    font-weight: 500;
    background-color: #fff;
    &:disabled {
      opacity: 0.8;
      color: #1e1f21;
    }
    &::placeholder {
      color: #89a4fd;
    }
  }
`;
