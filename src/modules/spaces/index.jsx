import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Container from '@/components/containers';
import { CardModel } from '@/components/ui';
import Filter from './components/filter';
import useDebounce from '@/helpers/useDebounce';

import { Grid, NoFound } from './style';

const Spaces = ({ data, categoryData, searchData }) => {
  const [category, setCategory] = useState(categoryData);
  const [search, setSearch] = useState(searchData);
  const { push } = useRouter();

  const debouncedSearch = useDebounce(search, 800);

  useEffect(() => {
    push(`/spaces?category=${category}&search=${search}`);
  }, [debouncedSearch]);

  useEffect(() => {
    push(`/spaces?category=${category}&search=${search}`);
  }, [category]);

  return (
    <Container>
      <Filter data={{ setCategory, category, setSearch, search }} />
      {!!data.length ? (
        <Grid>
          {data?.map((item) => (
            <CardModel
              key={item._id}
              data={item}
            />
          ))}
        </Grid>
      ) : (
        <NoFound>Nothing was found for this query</NoFound>
      )}
    </Container>
  );
};
export default Spaces;
