const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h1 className="py-6 text-lg w-1/3">{description}</h1>
      <div className="flex">
        <button className="cursor-pointer text-black bg-white p-4 px-12 text-xl rounded-lg hover:bg-white/70">Play</button>

        <button className="cursor-pointer mx-2 bg-gray-500 p-4 px-12 text-xl rounded-lg text-white">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
