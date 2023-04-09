import React, { useState } from 'react';
import Link from 'next/link';

import Scene from '@/components/3D/scene';
import Container from '@/components/containers';

import { Wrapper, Obj, Row, Category, Preview } from './style';
import { IconPerson } from '@/components/icons';
import { BlueButton } from '@/components/ui';

const Details = ({ data }) => {
  const { name, path3D, categories, description, owner, ownerId } = data;
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(false);

  return (
    <Wrapper>
      <Obj>
        {show ? (
          <Preview>
            {progress && (
              <BlueButton
                outline
                onClick={() => setShow(false)}
              >
                Hide Preview
              </BlueButton>
            )}
          </Preview>
        ) : (
          <BlueButton
            className="preview-btn"
            onClick={() => setShow(true)}
          >
            Return Preview
          </BlueButton>
        )}
        <Scene
          url={path3D}
          setProgress={setProgress}
        />
      </Obj>
      <Container>
        <Row between>
          <h2 className="title">{name}</h2>
          {!show && (
            <BlueButton
              outline
              onClick={() => setShow(true)}
            >
              Return Preview
            </BlueButton>
          )}
        </Row>
        <Row>
          <Link href={`/profile/${ownerId}`}>
            <IconPerson />
            {owner}
          </Link>
        </Row>
        <Row>
          {!!categories?.length &&
            categories.map((item, id) => <Category key={id}>{item}</Category>)}
        </Row>
        <Row>
          <p>{description}</p>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Details;
