import styled from 'styled-components';
import { flex_center } from '@/assets/scss/global';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flex_center}
  padding: 0 16px;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
`;

export const Column = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  ${flex_center}
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 14px;
  padding: 20px 16px;
  width: 100%;
  position: relative;
`;

export const Title = styled.h2`
  color: #191919;
  font-size: 28px;
  font-weight: 800;
  width: 100%;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 16px;
  .blue-btn {
    width: 100%;
    max-width: 200px;
    margin: 18px auto 0 auto;
    padding: 10px 0;
  }
  .crumbs {
    font-size: 13px;
    margin-top: 4px;
    b {
      cursor: pointer;
      color: #2081e2;
      @media screen and (min-width: 1024px) {
        transition: color 0.4s linear;
        &:hover {
          color: #81b3e6;
        }
      }
    }
  }
`;

export const CloseBtn = styled.button`
  border-radius: 50%;
  position: absolute;
  top: 16px;
  right: 16px;
  ${flex_center}
  padding: 8px;
  @media screen and (min-width: 1024px) {
    transition: background-color 0.4s linear;
    &:hover {
      background-color: #cccccc39;
    }
  }
`;
