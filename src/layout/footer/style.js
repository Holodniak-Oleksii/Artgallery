import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { flex_center } from '@/assets/scss/global';

export const Wrapper = styled.footer`
  padding: 30px 0;
  background-color: #4788fa;
  position: relative;
  margin-bottom: auto;

  margin-top: 80px;
  width: 100%;
  z-index: 2;
  .wave {
    z-index: -1;
    position: absolute !important;
    top: 0;
    transform: translateY(-50%);
    left: 0;
    width: 100%;

    &:last-child {
      transform: translateY(-40%);
    }
  }
  @media screen and (max-width: 1024px) {
    .container {
      padding-bottom: 0;
    }
  }
`;

export const Flex = styled.div`
  background-color: #4788fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  .drop {
    position: static;
    transform: translate(0);
    height: 250px;
    width: 350px;
    ${flex_center}
    &::after {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    .drop {
      height: 200px;
      width: 300px;
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  width: fit-content;
  width: 240px;
  color: #fff;
  gap: 30px;
  flex-direction: column;
  .blue-btn {
    width: 180px;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
  }
`;
export const Logo = styled.div`
  ${flex_center}
  gap: 10px;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 160px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    height: 100%;
    width: 1px;
    background-color: #fff;
  }
  li {
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
  }
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 1025px) {
    li:hover {
      color: rgba(208, 242, 255, 1);
    }
    svg:hover {
      path {
        fill: rgba(208, 242, 255, 1);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    height: auto;
    &::before {
      display: none;
    }
  }
  @media screen and (max-width: 540px) {
    li {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
export const Address = styled.div`
  position: relative;
  z-index: 30;

  a,
  span {
    text-align: end;
    color: #fff;
    display: block;
    font-size: 16px;
    line-height: 24px;
    transform: translate(20px, -10px);
  }
  span {
    margin-top: 20px;
  }
  @media screen and (max-width: 767px) {
    span {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 540px) {
    margin-top: 10px;
    a,
    span {
      transform: translate(0);
      text-align: center;
    }
  }
`;
