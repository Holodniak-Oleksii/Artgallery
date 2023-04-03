import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  height: fit-content;
  .video-container {
    width: 58%;
  }
  @media screen and (max-width: 767px) {
    padding: 60px 32px;
  }
  @media screen and (max-width: 540px) {
    padding: 40px 16px;
  }
`;
export const Content = styled.div`
  width: 40%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 24px;
  .blue-btn {
    svg {
      transform: rotate(180deg);
    }
  }
  @media screen and (max-width: 1440px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 1280px) {
    padding-top: 80px;
    gap: 16px;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    gap: 12px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 2;

    .blue-btn {
      margin: auto;
    }
    .title,
    .paragraph {
      color: #fff;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      max-width: 200px;
      z-index: -1;
      aspect-ratio: 1 / 1;
      background-color: #6861ee5b;
      filter: drop-shadow(0 0 10px #030ea8);
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;
export const Background = styled(Image)`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
