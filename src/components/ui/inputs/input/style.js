import { flex_center } from '@/assets/scss/global';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: ${(props) => (props.free ? '44px' : '64px')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  gap: 2px;
`;
export const Container = styled.div`
  min-height: 44px;
  width: 100%;
  display: flex;
  position: relative;
  .field {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 2px;
    border-radius: 8px;
    ${(props) => props.haveDoubleIcon && `padding: 0 44px 0 44px `};
    ${(props) => !props.haveDoubleIcon && `padding: 0 22px 0 22px `};
    ${(props) => props.leftIcon && `padding: 0 22px 0 44px `};
    ${(props) => props.rightIcon && `padding: 0 44px 0 22px `};
    ${(props) =>
      props.error
        ? `border: 1px solid #e63a3a;`
        : `border: 1px solid #5e84ff; `};
    ${(props) => props.password && `padding: 0 44px 0 44px `};
    color: #3b66f1;
    outline: none;
    font-weight: 500;
    background-color: #fff;
    &:disabled {
      opacity: 0.8;
      color: #1e1f21;
    }
    &::placeholder {
      color: #89a4fd;
    }
  }
`;

export const Icon = styled.button`
  ${flex_center}
  height: 100%;
  width: 44px;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => (props.left ? 'left: 0' : 'right : 0')};
  svg {
    max-width: 20px;
    max-height: 20px;
  }
`;
export const IconPassword = styled.button`
  ${flex_center}
  height: 100%;
  width: 44px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;
export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #3b66f1;
  margin-bottom: 2px;
  padding-left: 4px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
