import React from "react";
import VideoWindow from "../video-window";
import { Wrapper, Content } from "./style";
import { BlueButton } from "@/components/ui";
import { IconArrow } from "@/components/icons";

const Banner = () => {
  return (
    <Wrapper>
      <Content>
        <h1 className='title'>We visualize your fantasies in 3D reality</h1>
        <p className='paragraph'>
          Explore unusual worlds and experience the creative power of our
          talented team of artists. Exciting works created using the latest 3D
          modeling and rendering technologies are ready to enchant you with
          their beauty and originality
        </p>
        <BlueButton>
          More <IconArrow />
        </BlueButton>
      </Content>
      <VideoWindow />
    </Wrapper>
  );
};

export default Banner;
