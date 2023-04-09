import styled, { css, keyframes } from 'styled-components';
import { flex_center } from '@/assets/global';

const drop = (lastData, currentData) => keyframes`
    0%{
        left: ${lastData + 'px'} ;
    }
    100%{
        left: ${currentData + 'px'} ;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  ${flex_center}
  position: relative;
  gap: 50px;
`;
export const FakeContainer = styled.div`
  position: absolute;
  ${flex_center}
  gap: 50px;
  transition: all 2s linear;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
  filter: url(#filter-matrix);
`;
export const Item = styled.button`
  width: 80px;
  height: 80px;
  padding: 20px;
  svg {
    width: 100%;
    pointer-events: none;
    height: 100%;
  }
  ${flex_center}
  border-radius: 50%;
  transition: all linear 1.2s;

  ${(props) =>
    !props.active
      ? `
          border: 1px rgba(32, 129, 226, 1) solid;
        `
      : css`
          border: 1px transparent solid;
          svg {
            path {
              transition: all linear 1.2s;
              stroke: #fff;
            }
          }
        `}

  ${(props) =>
    props.transparent
      ? `
      position: relative;
      z-index: 5;
      `
      : props.active &&
        `
      background : rgba(32, 129, 226, 1);
    `}
`;

export const TravelButton = styled.div`
  border-radius: 100%;
  position: absolute;
  width: 80px;
  height: 80px;
  background: radial-gradient(
      63.59% 63.59% at 64.56% 24.76%,
      rgba(172, 3, 237, 0) 0%,
      rgb(172, 3, 237) 100%
    ),
    radial-gradient(
      69.9% 69.9% at 73.3% 22.33%,
      rgb(35, 88, 252) 0%,
      rgb(31, 85, 252) 100%
    );
  animation: ${(props) => drop(props.lastData, props.currentData)} 1.2s linear
    both;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Content = styled.div`
  background-color: #f8f8f8;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, auto);
  width: 100%;
  grid-gap: 16px;
  margin: auto;
`;
