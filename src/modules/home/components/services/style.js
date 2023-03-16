import styled, { css, keyframes } from "styled-components";
import { flex_center } from "@/assets/scss/global";

const drop = (lastData, currentData) => keyframes`
    0%{
        left: ${lastData + "px"} ;
    }
    100%{
        left: ${currentData + "px"} ;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  ${flex_center}
  position: relative;
  gap: 60px;
`;
export const FakeContainer = styled.div`
  position: absolute;
  ${flex_center}
  gap: 60px;
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
`;

export const Content = styled.div`
  background-color: #f8f8f8;
  height: 300px;
  position: relative;
  width: 100%;
`;
export const Text = styled.p`
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
  transform: translateY(-50%);
  font-size: 24px;
  line-height: 28px;
  color: rgb(35, 164, 219);
  transition: all linear 0.4s;
  opacity: 0;
  ${(props) =>
    props.active &&
    `
  opacity: 1;
  `}
`;
