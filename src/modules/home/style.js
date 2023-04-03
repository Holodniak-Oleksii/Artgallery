import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;
export const List = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
`;
export const Item = styled.div`
  width: 100%;
  border: 1px solid #c1c1c1;
  img {
    height: 400px;
    width: 100%;
    object-fit: contain;
  }
`;
export const Banner = styled.div`
  width: 60%;
`;

export const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 120px;
  @media screen and (max-width: 1024px) {
    gap: 80px;
  }
  @media screen and (max-width: 767px) {
    gap: 40px;
  }
`;
