import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 12px));
  gap: 16px;
  @media screen and (max-width: 767px) {
    gap: 6px;
    grid-template-columns: repeat(2, calc(50% - 4px));
  }
`;

export const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;
  transform: translateY(-50%);
  width: 100%;
  padding: 20px 16px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    padding: 12px 16px;
  }
  @media screen and (max-width: 540px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const Item = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.4s ease;
    object-fit: cover;
  }
  @media screen and (min-width: 1025px) {
    transition: all 0.4s ease;
    &:hover {
      img {
        filter: blur(4px);
        transform: scale(1.1);
      }
      .title {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .title {
      opacity: 1;
    }
  }
`;
