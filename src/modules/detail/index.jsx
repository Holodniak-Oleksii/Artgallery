import React from 'react';
import Scene from '@/components/3D/scene';

import { Wrapper } from './style';

const Details = ({ data }) => {
  return (
    <Wrapper>
      <Scene url={data?.path3D} />
      <p>{data.name}</p>
    </Wrapper>
  );
};

export default Details;
