import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import { Wrapper, Card, Title, Explore } from './style';

// import required modules
import { BlueButton } from '@/components/ui';
import Image from 'next/image';

const Carousel = ({ items }) => {
  const [active, setActive] = useState(null);
  return (
    <Wrapper>
      <Explore className=" subtitle">
        By adding 3D models, you expand the range of our capabilities
      </Explore>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slideToClickedSlide={'true'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 6,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setActive(swiper.realIndex);
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          540: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item, id) => (
          <SwiperSlide key={item.id}>
            <Card active={id === active}>
              <Image
                height={400}
                width={300}
                src={item.path}
                alt={'3d model'}
                placeholder="empty"
              />
              <Title className="details">
                <span className="title">User Userovish</span>
                <span className="user">@bagdekw</span>
                <BlueButton>View All</BlueButton>
              </Title>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
