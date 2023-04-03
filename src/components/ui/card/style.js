import { overflowText } from '@/assets/scss/global';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 8px 8px 6px #f0efef, -8px -8px 6px #ffffff;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 290px;
  }

  @media screen and (min-width: 1025px) {
    transition: all linear 0.4s;
    &:hover {
      transform: scale(1.03);
    }
  }
  @media screen and (max-width: 767px) {
    height: 280px;
    box-shadow: 4px 4px 4px #f0efef, -4px -4px 4px #ffffff;

    .image {
      max-height: 190px;
    }
  }
  @media screen and (max-width: 540px) {
    height: 240px;
    .image {
      max-height: 150px;
    }
  }
`;

export const InformationBar = styled.div`
  width: 100%;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .title {
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
    ${overflowText}
  }
  @media screen and (max-width: 767px) {
    gap: 2px;
  }
  @media screen and (max-width: 540px) {
    padding: 10px 6px;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .blue-btn {
    padding: 2px 16px;
    font-size: 14px;
  }
  .author {
    font-size: 14px;
    line-height: 18px;
    font-style: italic;
    ${overflowText}
    max-width: calc(100% - 70px)
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    .author {
      max-width: 100%;
    }
  }
`;
