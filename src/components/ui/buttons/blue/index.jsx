import React from 'react';
import styled, { css } from 'styled-components';

import { flex_center } from '@/assets/scss/global';

const Button = styled.button`
  ${flex_center}
  gap: 4px;
  padding: 8px 20px;
  border-radius: 100px;
  ${(props) =>
    props.outline
      ? css`
          border: 1px solid rgba(164, 55, 219, 1);
          color: rgba(32, 129, 226, 1);
        `
      : props.transparent
      ? css`
          background: rgba(32, 129, 226, 0.1);
          color: rgba(32, 129, 226, 1);
        `
      : props.white
      ? css`
          border: 1px solid rgba(255, 255, 255, 1);
          color: rgba(255, 255, 255, 1);
        `
      : css`
          background: linear-gradient(
            90deg,
            rgba(164, 55, 219, 1) 0%,
            rgba(32, 129, 226, 1) 100%
          );
          color: #fff;
        `}
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  &:disabled {
    opacity: 0.7;
  }
  @media screen and (min-width: 1024px) {
    transition: all 0.4s ease-in;
    &:hover {
      ${(props) =>
        props.outline
          ? css`
              border: 1px solid rgba(164, 55, 219, 1);
              background-color: rgba(188, 97, 233, 0.1);
            `
          : props.transparent
          ? css`
              background: rgba(32, 129, 226, 0.2);
            `
          : props.white
          ? css`
              border: 1px solid rgba(255, 255, 255, 1);
              background-color: rgba(255, 255, 255, 0.1);
            `
          : css`
              background: linear-gradient(
                90deg,
                rgba(178, 93, 221, 1) 0%,
                rgba(62, 146, 231, 1) 100%
              );
            `}
    }
  }
`;

const BlueButton = ({
  title,
  onClick,
  disabled,
  type,
  white,
  children,
  outline,
  transparent,
  className = 'blue-btn',
}) => {
  return (
    <Button
      disabled={disabled}
      white={white}
      transparent={transparent}
      title={title || 'button'}
      outline={outline}
      onClick={onClick}
      className={className}
      type={type || 'button'}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
