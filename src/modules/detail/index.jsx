import React from 'react';
import Scene from '@/components/3D/scene';

import { Wrapper, Obj, Row } from './style';

const Details = ({ data }) => {
  console.log('🚀 ~ file: index.jsx:7 ~ Details ~ data:', data);
  const { name, path3D, categories } = data;
  return (
    <Wrapper>
      <Obj>
        <Scene url={path3D} />
      </Obj>
      <Row>
        <h2 className="title">{name}</h2>
      </Row>
      <Row>
        categories:
        <br />
        {!!categories.length &&
          categories.map((item) => (
            <>
              <b>{item}</b>
              <br />
            </>
          ))}
      </Row>
    </Wrapper>
  );
};

export default Details;
