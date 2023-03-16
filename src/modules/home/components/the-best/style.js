import styled, { css, keyframes } from "styled-components";
import { flex_center } from "@/assets/scss/global";

const animationSmall = keyframes`
 0%{
  border-radius: 40% 50% 40% 54% / 58% 56% 50% 50%;
 }
 25%{
  border-radius: 44% 58% 48% 50% / 52% 50% 56% 53%;
 }
 50%{
  border-radius: 48% 56% 53% 54% / 60% 60% 54% 40%;
 }
  75%{
    border-radius: 44% 58% 48% 50% / 52% 50% 56% 53%;
 }
 100%{
  border-radius: 40% 50% 40% 54% / 58% 56% 50% 50%;
 }
`;

const animation = keyframes`
 0%{
  border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
 }
 25%{
  border-radius: 40% 60% 60% 50% / 50% 60% 36% 40%;
 }
 50%{
  border-radius: 48% 53% 59% 50% / 50% 59% 56% 40%;
 }
75%{
  border-radius: 40% 60% 60% 50% / 50% 60% 36% 40%;
 }
 100%{
  border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
 }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 600px;
`;

export const Integration = styled.div`
  width: 50%;
  position: relative;
  ${flex_center}
`;

export const Content = styled.div`
  width: 45%;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const Image = styled.img`
  height: 450px;
  width: auto;
  border-radius: 14px;
`;

export const Drop = styled.div`
  ${(props) =>
    props.small
      ? `
    top: -30px;
    right: 30px;
    height: 140px;
    width: 140px;
  `
      : `
  bottom: -30px;
  left: 0;
  height: 200px;
  width: 200px;
  `}

  position: absolute;

  background: #54abfb;
  ${(props) =>
    props.small
      ? css`
          border-radius: 40% 50% 40% 54% / 58% 56% 50% 50%;
          animation: ${animationSmall} 4s infinite both;
        `
      : css`
          border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
          animation: ${animation} 4s infinite both;
        `}
  opacity: 0.8;
  border: 2px solid #3d93ff;

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #318cfe;
    box-shadow: -10px 20px 6px #1b6cfb, -20px 40px 22px #1b6cfb,
      inset -6px 6px 10px #1b6cfb, inset 2px 6px 10px #1a74e5,
      inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff;
  }

  ::after {
    content: "";
    position: absolute;
    ${(props) =>
      props.small
        ? `
        height: 20px;
    width: 20px;
    left: 80px;
    top: 30px;
      `
        : `
      height: 40px;
    width: 40px;
    left: 120px;
    top: 40px;
      `}

    background: #e6fdfb;
    border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
    box-shadow: 16px 40px 0 -10px white;
    opacity: 0.8;
  }

  ::before {
    transition: 1s all linear;

    ${(props) =>
      props.small
        ? css`
            border-radius: 40% 50% 40% 54% / 58% 56% 50% 50%;
            animation: ${animationSmall} 4s infinite both;
          `
        : css`
            border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
            animation: ${animation} 4s infinite both;
          `}
  }
`;
