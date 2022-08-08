import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { addVideoView } from "../utils/api-client";

function VideoPlayer({ previewUrl, video, isModal }) {
  const videoRef = useRef();

  const { id, thumbnail, url } = video;

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current);

    if (!previewUrl) {
      vjsPlayer.poster(thumbnail);
      vjsPlayer.src(url);
    }

    if (previewUrl) {
      vjsPlayer.src({ type: "video/mp4", src: previewUrl });
    }

    vjsPlayer.on("ended", () => {
      addVideoView(id);
    });

    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose();
      }
    };
  }, [id, previewUrl, thumbnail, url]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        controls
        className={`video-js vjs-big-play-centered vjs-fluid ${
          isModal ? "rounded-none" : "rounded-lg"
        }`}></video>
    </div>
  );
}

export default VideoPlayer;
