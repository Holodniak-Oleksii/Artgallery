import { overflowText } from '@/assets/scss/global';
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
