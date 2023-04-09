import React from 'react';
import Select from 'react-select';

import { IconCategory, IconClose, IconSearch } from '@/components/icons';

import { Icon } from '@/components/ui/inputs/input/style';
import { selectStyles } from '@/components/ui/inputs/select/style';
import { Wrapper, Container } from './style';

import { categories } from '../../../create/data';

const Filter = ({ data }) => {
  const { setCategory, category, setSearch, search } = data;

  const handlerClear = () => {
    setCategory('all');
    setSearch('');
  };

  return (
    <Container>
      <Wrapper>
        <Icon left>
          <IconSearch />
        </Icon>
        <input
          className="field"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Icon onClick={handlerClear}>
          <IconClose />
        </Icon>
      </Wrapper>
      <Wrapper className="filter">
        <Icon left>
          <IconCategory />
        </Icon>
        <Select
          placeholder={'Category'}
          options={categories}
          defaultValue={categories.filter((item) => item.value === category)[0]}
          onChange={({ value }) => {
            setCategory(value);
          }}
          styles={selectStyles}
        />
      </Wrapper>
    </Container>
  );
};

export default Filter;
