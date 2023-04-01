import React from 'react';
import Select from 'react-select';

import { IconCategory, IconClose, IconSearch } from '@/components/icons';

import { Icon } from '@/components/ui/inputs/input/style';
import { selectStyles } from '@/components/ui/inputs/select/style';
import { Wrapper, Container } from './style';

import { categories } from '../../../create/data';

const options = [
  {
    value: 'All',
    label: 'All Categories',
  },
].concat(categories);

const Filter = ({ setFilter, filter }) => {
  const handlerClear = () => {
    setFilter({ query: '', category: '' });
  };

  return (
    <Container>
      <Wrapper>
        <Icon left>
          <IconSearch />
        </Icon>
        <input
          className="field"
          value={filter.query}
          onChange={(e) => {
            setFilter({ ...filter, query: e.target.value });
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
          options={options}
          defaultValue={options[0]}
          onChange={({ value }) => {
            setFilter({ ...filter, category: value });
          }}
          styles={selectStyles}
        />
      </Wrapper>
    </Container>
  );
};

export default Filter;
