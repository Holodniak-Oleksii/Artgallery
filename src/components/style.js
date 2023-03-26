import { flex_center, overflowText } from '@/assets/scss/global';
import styled from 'styled-components';

export const Error = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #992d2d;
  padding-left: 4px;
  ${overflowText}
  @media screen and (max-width: 767px) {
    object-position: 50%;
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
