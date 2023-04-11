import React from 'react';
import { Wrapper, InformationBar, Flex } from './style';
import { BlueButton } from '@/components/ui';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

const CardModel = ({ data }) => {
  const route = useRouter();
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const handlerPush = () => {
    if (data._id) {
      route.push(`/details/${data._id}`);
    } else route.push(`/spaces?category=all&search=`);
  };

  return (
    <Wrapper
      className="card"
      onClick={() => {
        if (isTablet) {
          handlerPush();
        }
      }}
    >
      <Image
        src={data.image || data.pathImage}
        alt="model"
        className="image"
        width={1200}
        height={900}
      />
      <InformationBar>
        <span className="title">{data.title || data.name}</span>
        <Flex>
          <span className="author">@{data.ownerName}</span>
          <BlueButton
            outline
            onClick={handlerPush}
          >
            View
          </BlueButton>
        </Flex>
      </InformationBar>
    </Wrapper>
  );
};

export default CardModel;
