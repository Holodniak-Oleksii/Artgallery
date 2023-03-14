import { Link } from "react-router-dom";
import styled from "styled-components";

import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.header`
  height: 80px;
  max-width: 1920px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
  padding: 10px 100px 10px 100px;
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

export const Logo = styled.div`
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
  align-items: center;
  gap: 16px;
`;

export const Item = styled(Link)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  ${(props) => props.active && `font-weight: 700`}
`;

export const Navigations = styled.div`
  gap: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Group = styled.div`
  ${flex_center}
  gap: 8px
`;
