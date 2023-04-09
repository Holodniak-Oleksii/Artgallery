import Container from '@/components/containers';
import React from 'react';
import { Wrapper, Text } from './style';
import { BlueButton } from '@/components/ui';
import { useRouter } from 'next/router';

const Page404 = () => {
  const { push } = useRouter();

  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>404 Not found</h1>
          <p>Please teleport to other page</p>
          <BlueButton onClick={() => push('/')}>Home</BlueButton>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Page404;
