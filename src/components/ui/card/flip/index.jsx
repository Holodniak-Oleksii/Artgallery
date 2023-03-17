import React from "react";
import { BackCard, FrontCard, Inner, Title, Wrapper } from "./style";

const FlipCard = ({ data }) => {
  return (
    <Wrapper>
      <Inner className='flip-card-inner'>
        <FrontCard>
          <Title>{data.text}</Title>
        </FrontCard>
        <BackCard>
          <img src={data.image} alt='card' />
        </BackCard>
      </Inner>
    </Wrapper>
  );
};

export default FlipCard;
