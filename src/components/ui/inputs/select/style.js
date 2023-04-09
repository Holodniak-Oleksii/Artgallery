import { flex_center } from '@/assets/global';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.free ? '44px' : '64px')};
  position: relative;
`;

export const selectStyles = {
  container: (styles) => ({
    ...styles,
    height: '44px',
    minHeight: '44px',
    border: 'none',
    color: '#3b66f1',
    backgroundColor: '#fff',
  }),
  control: (styles) => ({
    ...styles,
    width: '100%',
    backgroundColor: '#fff',
    minHeight: '44px',
    with: '100%',
    border: '1px solid #5e84ff',
    paddingLeft: '44px',
    boxShadow: 'none',
    borderRadius: '8px',
    color: '#3b66f1',
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '0 0 0 44px',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#3b66f1',
    '&:hover': { color: '#3b66f1' },
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    display: 'none',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#3b66f1',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#89a4fd',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: 5000,
    borderRadius: '8px',
    zIndex: 1000,
    border: ' 1px solid #89a4fd',
    color: '#3b66f1',
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: 200,
    fontWeight: 500,
    fontSize: '12px',
    textTransform: 'capitalize',
    padding: '0',
    zIndex: 1000,
    lineHeight: '16px',
    color: '#3b66f1',
  }),
  menuPortal: (styles) => ({
    ...styles,
    zIndex: 1000,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0',
    fontWeight: 500,
    fontSize: '12px',
    textTransform: 'capitalize',

    lineHeight: '16px',
    color: '#3b66f1',
    caretColor: '#3b66f1',
    '&::placeholder': {
      color: '#89a4fd',
    },
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    color: '#3b66f1',
    textTransform: 'capitalize',
    padding: ' 10px 16px',
    '&:hover': {
      background:
        'linear-gradient(90deg, rgba(30, 163, 240, 0.16) 0%, rgba(253, 210, 99, 0) 100%)',
    },
  }),
  input: (styles) => ({
    ...styles,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#3b66f1',
    textTransform: 'capitalize',
  }),
  noOptionsMessage: (styles) => ({
    ...styles,
    color: '#3b66f1',
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: '#89a4fd',
    borderRadius: '8px',
    padding: '2px 0 2px 2px',
    textTransform: 'capitalize',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#ffffff',
    fontSize: '14px',
    textTransform: 'capitalize',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      backgroundColor: '#6586f1',
      color: 'white',
      borderRadius: '0 8px 8px 0 ',
    },
  }),
};
export const errorStyle = {
  ...selectStyles,
  control: (styles) => ({
    ...styles,
    width: '100%',
    minHeight: '44px',
    with: '100%',
    border: '1px solid #e63a3a',
    paddingLeft: '44px',
    boxShadow: 'none',
    borderRadius: '8px',
    color: '#b4d7fb',
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '0 0 0 44px',
  }),
};

export const Icon = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  ${flex_center}
  height: 44px;
  width: 44px;
`;
export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #3b66f1;
  margin-bottom: 2px;
  padding-left: 4px;
`;

export const LabelWidth = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding-left: 4px;
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #b4d7fb;
  }
  a {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-decoration-line: underline;
    color: #ffbc11;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
