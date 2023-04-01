import React, { useEffect, useState } from 'react';

import Container from '@/components/containers';
import { CardModel } from '@/components/ui';
import Filter from './components/filter';

import { SpacesService } from '@/services/spaces';

import { Grid } from './style';

const Spaces = ({ data }) => {
  const [filter, setFilter] = useState({ query: '', category: '' });
  const [models, setModels] = useState(data);

  useEffect(() => {
    const handlerFilter = async () => {
      const data = await SpacesService.filterSpace(filter);
      setModels(data);
    };
    handlerFilter();
  }, [filter.query, filter.category]);

  return (
    <Container>
      <Filter
        setFilter={setFilter}
        filter={filter}
      />
      <Grid>
        {models?.map((item) => (
          <CardModel
            key={item._id}
            data={item}
          />
        ))}
      </Grid>
    </Container>
  );
};
export default Spaces;
