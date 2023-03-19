import React from 'react';
import Container from '@/components/containers';
import { Grid } from './style';
import { CardModel } from '@/components/ui';

const Spaces = ({ data }) => {
  return (
    <Container>
      <Grid>
        {data.map((item) => (
          <CardModel data={item} />
        ))}
      </Grid>
    </Container>
  );
};
export default Spaces;
