import styled, { css } from 'styled-components';
import { overflowText } from '@/assets/scss/global';

export const Wrapper = styled.div`
  width: 100%;

  .swiper-wrapper {
    height: 500px;
    width: 100%;
    align-items: center;
    padding: 20px 0;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    height: 400px;

    position: relative;
  }
  .swiper-slide img {
    filter: contrast(0.8) blur(2px);
  }
  .swiper-slide-active img {
    filter: contrast(1) blur(0px) !important;
  }

  .swiper-wrapper {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media screen and (max-width: 1440px) {
    .swiper-wrapper {
      height: 400px;
    }
    .swiper-slide {
      height: 320px;
    }
  }
  @media screen and (max-width: 1024px) {
    .swiper-wrapper {
      height: 360px;
    }
    .swiper-slide {
      height: 260px;
    }
  }
  @media screen and (max-width: 540px) {
    .swiper-wrapper {
      height: 300px;
    }
    .swiper-slide {
      height: 230px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  @media screen and (min-width: 1025px) {
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.04) rotate(1deg);
      ${(props) =>
        props.active &&
        css`
          .details {
            opacity: 1;
          }
        `}
    }
  }
  @media screen and (max-width: 1024px) {
    ${(props) =>
      props.active &&
      css`
        .details {
          opacity: 1;
        }
      `}
  }
`;
export const Title = styled.div`
  width: 100%;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  position: absolute;
  border-radius: 10px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;

  .blue-btn {
    margin-top: 6px;
    font-size: 14px;
    padding: 4px 12px;
  }
  .title,
  .user {
    ${overflowText}
    color: #fff;
    display: block;
  }
  .title {
    font-size: 18px;
    line-height: 22px;
  }
  .user {
    font-size: 14px;
    font-style: italic;
    line-height: 16px;
  }
  padding: 20px 16px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  @media screen and (max-width: 540px) {
    padding: 8px 6px;
    .title {
      font-size: 14px;
      line-height: 20px;
    }
    .blue-btn {
      margin-top: 6px;
      font-size: 12px;
      padding: 4px 8px;
    }
  }
`;

export const Explore = styled.h2`
  width: 100%;
  max-width: 800px;
  margin: auto;
  text-align: center;
  display: block;
`;
