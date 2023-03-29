import Image from 'next/image';
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background-color: #6d85ff;
  position: relative;
  margin-bottom: 140px;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  border: 8px solid #fff;
  box-sizing: content-box;
  object-fit: contain;
  width: 160px;
  height: 160px;
  background-color: #7a8ff8;
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
  h2 {
    font-size: 26px;
    line-height: 26px;
    font-weight: 700;
  }
  span {
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    color: #7a8ff8;
  }
`;
