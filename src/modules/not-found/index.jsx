import Container from '@/components/containers';
import React from 'react';
import { Wrapper, Text } from './style';
import Scene from '@/components/3D/scene';
import { BlueButton } from '@/components/ui';

const Page404 = () => {
  return (
    <Container>
      <Wrapper>
        <Scene url={process.env.NOT_FOUND_URL} />
        <Text>
          <h1>404 Not found</h1>
          <p>Please teleport to other page</p>
          <BlueButton>Home</BlueButton>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Page404;
