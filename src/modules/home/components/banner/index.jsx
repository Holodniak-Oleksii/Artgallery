import React from 'react';

import VideoWindow from '../video-window';
import { BlueButton } from '@/components/ui';
import { IconArrow } from '@/components/icons';

import { Wrapper, Content, Background } from './style';

import gif from '@/assets/images/gif/banner.gif';
import { useModal } from '@ebay/nice-modal-react';
import { MODALS } from '@/components/modals/register';
import { useUser } from '@/store/selectors';
import { useRouter } from 'next/router';

const Banner = () => {
  const { show } = useModal(MODALS.LOGIN);
  const { userID } = useUser();
  const { push } = useRouter();

  const handlerClickMore = () => {
    if (userID) {
      push('/spaces?category=all&search=');
    } else {
      show();
    }
  };

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
        <BlueButton onClick={handlerClickMore}>
          More <IconArrow />
        </BlueButton>
      </Content>
      <VideoWindow />
      <Background
        src={gif}
        placeholder="blur"
        blurDataURL={'blur'}
        width={0}
        height={0}
      />
    </Wrapper>
  );
};

export default Banner;
