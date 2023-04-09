import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
