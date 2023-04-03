import React, { useEffect, useState } from 'react';

import Container from '@/components/containers';
import { Background, MainFlex, Wrapper } from './style';
import SwiperCards from './components/slider';
import TheBestGallery from './components/the-best';
import Carousel from './components/carousel';
import Banner from './components/banner';
import Grid from './components/grid';
import { MobileOff, MobileOn } from '@/helpers/responsive';

import { cardsNew, ThreeDExample, text, categories } from './data';

const Home = () => {
  return (
    <Wrapper>
      <MobileOn>
        <Banner />
      </MobileOn>
      <Container>
        <MainFlex>
          <MobileOff>
            <Banner />
          </MobileOff>
          <SwiperCards items={cardsNew} />
          <TheBestGallery
            image={text[0].image}
            title={text[0].title}
            paragraph={text[0].paragraph}
          />
          <Carousel items={ThreeDExample} />
          <TheBestGallery
            image={text[1].image}
            title={text[1].title}
            paragraph={text[1].paragraph}
            revert
          />
          <Grid data={categories} />
        </MainFlex>
      </Container>
    </Wrapper>
  );
};

export default Home;
