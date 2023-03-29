import React from 'react';
import Link from 'next/link';

import Scene from '@/components/3D/scene';
import Container from '@/components/containers';

import { Wrapper, Obj, Row, Category } from './style';
import { IconPerson } from '@/components/icons';

const Details = ({ data }) => {
  const { name, path3D, categories, description, owner, ownerId } = data;
  return (
    <Wrapper>
      <Obj>
        <Scene url={path3D} />
      </Obj>
      <Container>
        <Row>
          <h2 className="title">{name}</h2>
        </Row>
        <Row>
          <Link href={`/profile/${ownerId}`}>
            <IconPerson />
            {owner}
          </Link>
        </Row>
        <Row>
          {!!categories?.length &&
            categories.map((item) => <Category>{item}</Category>)}
        </Row>
        <Row>
          <p>{description}</p>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Details;
