import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { Autoplay } from 'swiper';

import { CardModel } from '@/components/ui';
import { BlueButton } from '@/components/ui';

import { Wrapper, Head } from './style';

const SwiperCards = ({ items }) => {
  const { push } = useRouter();

  return (
    <Wrapper>
      <Head>
        <h2 className="head-title">New Models</h2>
        <BlueButton
          transparent
          onClick={() => push('/spaces')}
        >
          View All
        </BlueButton>
      </Head>
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView={2}
        spaceBetween={8}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetweenSlides: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetweenSlides: 12,
          },
          1440: {
            slidesPerView: 5,
            spaceBetweenSlides: 16,
          },
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
