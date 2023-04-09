import styled from 'styled-components';
import { flex_center, overflowText } from '@/assets/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.between
      ? 'justify-content: space-between'
      : 'justify-content: flex-start'};
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
    ${overflowText};
    max-width: calc(100% - 200px);
  }
  p {
    margin-top: 8px;
    line-height: 22px;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    .title {
      font-size: 20px;
      max-width: 100%;
    }
    .blue-btn {
      display: none;
    }
  }
`;

export const Preview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: #000000c0;
  ${flex_center}
`;

export const Obj = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 20px;
  border-radius: 4px;
  position: relative;
  .preview-btn {
    display: none;
  }
  @media screen and (max-width: 540px) {
    .preview-btn {
      display: block;
      position: absolute;
      bottom: 12px;
      z-index: 4;
      right: 12px;
    }
  }
`;

export const Category = styled.div`
  background-color: #0080ffb5;
  border: 1px solid #2081e2;
  color: #fff;
  padding: 4px 8px;
  width: fit-content;
  border-radius: 4px;
`;
