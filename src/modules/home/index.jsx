import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@/components/containers";
import { MainFlex, Wrapper } from "./style";
import Banner from "./components/banner";
import SwiperCards from "./components/slider";
import { cardsNew, services, ThreeDExample } from "./data";
import TheBestGallery from "./components/the-best";
import Services from "./components/services";
import Carousel from "./components/carousel";

const Home = () => {
  const push = useNavigate();

  return (
    <Wrapper>
      <Container>
        <MainFlex>
          <Banner />
          <SwiperCards items={cardsNew} />
          <TheBestGallery />
          <Carousel items={ThreeDExample} />
          {/* <Services items={services} /> */}
        </MainFlex>
      </Container>
    </Wrapper>
  );
};

export default Home;
