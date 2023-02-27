import styled from "styled-components";

export const Wrapper = styled.div``;
export const List = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
`;
export const Item = styled.div`
  width: 100%;
  border: 1px solid #c1c1c1;
  img {
    height: 400px;
    width: 100%;
    object-fit: contain;
  }
`;
