import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, calc(100% / 5 - 12px));
  gap: 12px;
  margin-top: 20px;
`;
