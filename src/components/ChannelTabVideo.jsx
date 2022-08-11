import React from "react";
import { VideoCard } from ".";

const ChannelTabVideo = ({ videos }) => {
  if (!videos.length) return <p>This channel hasn't posted any videos yet</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-8 mt-2">
      {videos.map((video) => (
            <VideoCard key={video.id} video={video} noUsername hideAvatar />
          ))}
    </div>
  );
};

export default ChannelTabVideo;
