import React from 'react';
import { Wrapper, Content, Integration, Picture, Drop } from './style';

const TheBestGallery = ({ revert, title, paragraph, image }) => {
  return (
    <Wrapper revert={revert}>
      <Content>
        <span className="title">{title}</span>
        <p className=" paragraph ">{paragraph}</p>
      </Content>
      <Integration>
        <Drop />
        <Drop small />
        <Picture
          src={image}
          alt="image"
        />
      </Integration>
    </Wrapper>
  );
};

export default TheBestGallery;
