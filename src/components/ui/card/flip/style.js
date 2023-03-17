import styled from "styled-components";

export const Title = styled.div`
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  margin: 0;
  color: #fff;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
const Card = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
`;

export const FrontCard = styled(Card)`
  background: rgb(255, 255, 255);
  padding: 16px;

  background: linear-gradient(
    120deg,
    rgba(32, 129, 226, 1) 30%,
    RGB(149, 64, 220) 88%
  );
`;

export const BackCard = styled(Card)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
  transform: rotateY(180deg);
`;

export const Wrapper = styled.div`
  background-color: transparent;
  width: 100%;
  height: 300px;
  perspective: 1000px;
  font-family: sans-serif;
  :hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`;
