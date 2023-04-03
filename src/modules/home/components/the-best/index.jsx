import React from 'react';
import { Wrapper, Content, Integration, Picture, Drop } from './style';
import { MobileOff } from '@/helpers/responsive';

const TheBestGallery = ({ revert, title, paragraph, image }) => {
  return (
    <Wrapper revert={revert}>
      <Content>
        <span className="title">{title}</span>
        <p className="paragraph">{paragraph}</p>
      </Content>
      <Integration>
        <Drop />
        <Drop small />
        <MobileOff>
          <Picture
            src={image}
            alt="image"
          />
        </MobileOff>
      </Integration>
    </Wrapper>
  );
};

export default TheBestGallery;
