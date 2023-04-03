import React from 'react';

import VideoWindow from '../video-window';
import { BlueButton } from '@/components/ui';
import { IconArrow } from '@/components/icons';
import { MobileOff, MobileOn } from '@/helpers/responsive';

import { Wrapper, Content, Background } from './style';

import gif from '@/assets/images/gif/banner.gif';

const Banner = () => {
  return (
    <Wrapper>
      <Content>
        <h1 className="title">We visualize your fantasies in 3D reality</h1>
        <p className="paragraph">
          Explore unusual worlds and experience the creative power of our
          talented team of artists. Exciting works created using the latest 3D
          modeling and rendering technologies are ready to enchant you with
          their beauty and originality
        </p>
        <BlueButton>
          More <IconArrow />
        </BlueButton>
      </Content>
      <MobileOff>
        <VideoWindow />
      </MobileOff>
      <MobileOn>
        <Background
          src={gif}
          placeholder="blur"
          blurDataURL={'blur'}
          width={0}
          height={0}
        />
      </MobileOn>
    </Wrapper>
  );
};

export default Banner;
