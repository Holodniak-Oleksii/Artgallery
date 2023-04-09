import { flex_center } from '@/assets/global';
import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100%;
  gap: 12px;
  .card {
    width: calc(100% / 5 - 10px);
  }
  @media screen and (max-width: 1280px) {
    .card {
      width: calc(100% / 4 - 10px);
    }
  }
  @media screen and (max-width: 1024px) {
    .card {
      width: calc(100% / 3 - 10px);
    }
  }
  @media screen and (max-width: 540px) {
    .card {
      width: calc(100% / 2 - 6px);
    }
  }
`;

export const NoFound = styled.div`
  ${flex_center}
  min-height: 400px;
  font-size: 26px;
  line-height: 30px;
  font-weight: 600;
  padding: 20px 32px;
  text-align: center;
  position: relative;
  background: #13f1fc;
  background: linear-gradient(135deg, #13f1fc 0%, #0470dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`;
