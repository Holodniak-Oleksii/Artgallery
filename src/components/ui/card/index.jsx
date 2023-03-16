import React from "react";
import { Wrapper, InformationBar, Flex } from "./style";
import { BlueButton } from "@/components/ui";

const CardModel = ({ data }) => {
  return (
    <Wrapper>
      <img src={data.image} alt='model' className='image' />
      <InformationBar>
        <span className='title'>{data.title}</span>
        <Flex>
          <span className='author'>@{data.author}</span>
          <BlueButton outline>View</BlueButton>
        </Flex>
      </InformationBar>
    </Wrapper>
  );
};

export default CardModel;
