import styled from 'styled-components';
import { flex_center } from '@/assets/scss/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  margin: 6px 0;
  font-size: 16px;
  a {
    font-size: 18px;
    color: #623eff;
    ${flex_center}
    gap: 6px;
  }
  .title {
    font-size: 24px;
  }
  p {
    margin-top: 8px;
    line-height: 22px;
  }
`;

export const Obj = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 20px;
  border-radius: 4px;
`;

export const Category = styled.div`
  background-color: #0080ffb5;
  border: 1px solid #2081e2;
  color: #fff;
  padding: 4px 8px;
  width: fit-content;
  border-radius: 4px;
`;
