import React from "react";
import ReactPlayer from "react-player/lazy";

import { Wrapper } from "./style";

import video from "@/assets/movies/banner-video.mp4";

const VideoWindow = () => {
  return (
    <Wrapper className='video-container'>
      <ReactPlayer
        url={video}
        muted={true}
        width={"100%"}
        height={"100%"}
        playing={true}
        loop={true}
        controls={true}
      />
      <svg class='svg'>
        <clipPath id='my-clip-path' clipPathUnits='objectBoundingBox'>
          <path d='M0,0 H0.323 V0.833 H0 V0 M0.339,0.083 H0.661 V0.917 H0.339 V0.083 M1,0.167 H0.677 V1 H1 V0.167'></path>
        </clipPath>
      </svg>
    </Wrapper>
  );
};

export default VideoWindow;
