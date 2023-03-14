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
export const Banner = styled.div`
  width: 60%;
  transform: rotateY(180deg);
  aspect-ratio: 9 / 5;
  background-size: cover;
  -webkit-clip-path: url(#my-clip-path);
  clip-path: url(#my-clip-path);
  .svg {
    position: absolute;
    width: 0;
    height: 0;
  }
`;
