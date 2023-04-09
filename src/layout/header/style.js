import styled from 'styled-components';
import Link from 'next/link';

import { flex_center } from '@/assets/global';
import { CloseBtn } from '@/components/style';

export const Wrapper = styled.header`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(207, 206, 206, 0.811);
  @media screen and (max-width: 767px) {
    height: 64px;
  }
`;

export const Logo = styled(Link)`
  height: 100%;
  margin-right: auto;
  .header-logo {
    height: 100%;
    width: fit-content;
  }
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 10px 100px 10px 100px;

  align-items: center;
  gap: 16px;
  max-width: 1920px;
  @media screen and (max-width: 1440px) {
    padding: 10px 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 10px 32px;
  }
  @media screen and (max-width: 540px) {
    padding: 10px 16px;
  }
`;

export const Item = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  ${(props) => props.active && `font-weight: 700`}
`;

export const Navigations = styled.div`
  gap: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Group = styled.div`
  ${flex_center}
  gap: 8px;
  .revert {
    transform: rotate(45deg);
  }
`;

export const AccountBtn = styled(CloseBtn)`
  position: static;
  aspect-ratio: 1 / 1;
  padding: 8px;
`;
export const BurgerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    height: 64px;
  }
`;
export const BurgerWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 0.5s ease;
  transform: translateX(-110%);
  ${(props) => props.open && `transform: translateX(0%);`}
`;

export const List = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  height: calc(100% - 80px);
  .item {
    font-size: 18px;
    line-height: 26px;
    padding: 22px 16px;
    border-bottom: 1px solid;
    border-image: linear-gradient(
        90deg,
        rgba(55, 62, 255, 0.2) 0%,
        rgba(55, 62, 255, 0.5) 25%,
        rgba(55, 62, 255, 1) 50%,
        rgba(55, 62, 255, 0.5) 75%,
        rgba(55, 62, 255, 0.2) 100%
      )
      1;
    width: 100%;
    max-width: 240px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1 1 auto;
`;
