import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { CardModel } from "@/components/ui";
import { BlueButton } from "@/components/ui";

import "swiper/css";
import "swiper/scss/autoplay";

import { Wrapper, Head } from "./style";

const SwiperCards = ({ items }) => {
  return (
    <Wrapper>
      <Head>
        <h2 className='head-title'>New Models</h2>
        <BlueButton transparent>View All</BlueButton>
      </Head>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={5}
        spaceBetween={16}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CardModel data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default SwiperCards;
