import React from "react";
import { MainWrapper } from "./youtubeVideo.styles";

export const YoutubeVideo = ({ videoId }) => {
  return (
    <MainWrapper>
      <div class="video-wrapper video-wide-screen">
        <iframe
          width="560"
          height="315"
          src={
            videoId.includes("https")
              ? videoId
              : `https://www.youtube.com/embed/${videoId}`
          }
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
    </MainWrapper>
  );
};
