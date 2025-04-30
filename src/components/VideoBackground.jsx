import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";

const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/a6VVrAZUnsc?si=IiDbxQdslnH1_j-L&amp;controls=0loop=1&autoplay=1&mute=1&cc_load_policy=1."
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
