import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";

const VideoBackground = () => {
  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/a6VVrAZUnsc?playlist=a6VVrAZUnsc&loop=1&autoplay=1&mute=1&controls=0&cc_load_policy=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
