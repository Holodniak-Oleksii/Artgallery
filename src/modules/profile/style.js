import { overflowText } from '@/assets/scss/global';
import Image from 'next/image';
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background-color: #6d85ff;
  position: relative;
  margin-bottom: 140px;

  @media screen and (max-width: 767px) {
    height: 150px;
  }
  @media screen and (max-width: 540px) {
    height: 120px;
    margin-bottom: 80px;
  }
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  border: 8px solid #fff;
  box-sizing: content-box;
  object-fit: contain;
  width: 160px;
  height: 160px;
  background-color: #7a8ff8;
  @media screen and (max-width: 767px) {
    width: 120px;
    height: 120px;
    border: 4px solid #fff;
  }
  @media screen and (max-width: 540px) {
    width: 80px;
    height: 80px;
  }
`;

export const User = styled.div`
  position: absolute;
  z-index: 1;
  left: 40px;
  bottom: 0;
  transform: translateY(70%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: #191919;
  width: 100%;
  max-width: calc(100% - 40px);
  h2 {
    ${overflowText}
    max-width: calc(100% - 170px);
    font-size: 26px;
    line-height: 26px;
    font-weight: 700;
  }
  span {
    ${overflowText}
    max-width: calc(100% - 170px);
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    color: #7a8ff8;
  }
  @media screen and (max-width: 767px) {
    left: 20px;
    gap: 6px;
    max-width: calc(100% - 20px);
    h2 {
      max-width: calc(100% - 130px);
      font-size: 20px;
      line-height: 24px;
    }
    span {
      max-width: calc(100% - 130px);
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media screen and (max-width: 540px) {
    left: 5px;
    gap: 4px;
    max-width: calc(100% - 5px);
    h2 {
      max-width: calc(100% - 90px);
      font-size: 16px;
      line-height: 16px;
    }
    span {
      max-width: calc(100% - 90px);
      font-size: 12px;
      line-height: 12px;
    }
  }
`;
