import React from "react";
import { Wrapper, Content, Integration, Image, Drop } from "./style";
import image from "@/assets/images/cards/5.webp";

const TheBestGallery = () => {
  return (
    <Wrapper>
      <Content>
        <span className='title'>
          Find inspiration <br /> for your ideas in the 3D art gallery.
        </span>
        <p className=' paragraph '>
          We will help you dive into the world of 3D technologies and become a
          builder of a new reality.Experience the limitless possibilities of 3D
          technology and unleash your imagination to shape a new world of
          endless opportunities.
        </p>
      </Content>
      <Integration>
        <Drop />
        <Drop small />
        <Image src={image} alt='image' />
      </Integration>
    </Wrapper>
  );
};

export default TheBestGallery;
