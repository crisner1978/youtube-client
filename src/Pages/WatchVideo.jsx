import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Comments,
  NoResults,
  SubscribeButton,
  VideoCard,
  VideoPlayer,
} from "../components";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import useAuthAction from "../hooks/useAuthAction";
import WatchVideoSkeleton from "../skeletons/WatchVideoSkeleton";
import {
  client,
  dislikeVideo,
  likeVideo,
  toggleSubscribeUser,
} from "../utils/api-client";
import { formatCreatedAt } from "../utils/date";

const WatchVideo = () => {
  const { videoId } = useParams();
  const handleAuthAction = useAuthAction();

  const { data: video, isLoading } = useQuery(["WatchVideo", videoId], () =>
    client.get(`/videos/${videoId}`).then((res) => res.data.video)
  );

  console.log(video)
  const { data: next, isLoading: isLoadingNext } = useQuery(
    ["WatchVideo", "Up Next"],
    () => client.get("/videos").then((res) => res.data.videos)
  );

  const filledLike = video && video.isLiked;
  const filledDislike = video && video.isDisliked;

  if (isLoading || isLoadingNext) return <WatchVideoSkeleton />;

  if (!isLoading && !video)
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );

  function handleLikeVideo() {
    handleAuthAction(likeVideo, video.id);
  }

  function handleDislikeVideo() {
    handleAuthAction(dislikeVideo, video.id);
  }

  function handleToggleSubscribe() {
    handleAuthAction(toggleSubscribeUser, video.user.id);
  }

  return (
    <div className="grid grid-cols-[minmax(70,_1fr)] lg:grid-cols-10 gap-8 px-7 pb-24">
      <div className="space-y-4 lg:col-span-7">
        <div>{!isLoading && <VideoPlayer video={video} />}</div>
        <div>
          <h3>{video.title}</h3>
          <div className="flex items-center">
            <p className="text-sColor">
              <span>{video.views} views</span> <span>•</span>{" "}
              <span>Premiered {formatCreatedAt(video.createdAt)}</span>
            </p>
            <div className="flex items-center ml-24 text-sColor">
              <p className="flex items-center space-x-4">
                <LikeIcon
                  onClick={handleLikeVideo}
                  className={`${
                    filledLike ? "fill-blue" : "fill-darkGrey"
                  } cursor-pointer hoverBright`}
                />
                <span>{video.likesCount}</span>
              </p>
              <p className="flex items-center ml-4 space-x-4">
                <DislikeIcon
                  onClick={handleDislikeVideo}
                  className={`${
                    filledDislike ? "fill-blue" : "fill-darkGrey"
                  } cursor-pointer hoverBright`}
                />
                <span>{video.dislikesCount}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="border-x-0 border-darkGrey border pt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={video.user.avatar || `https://dummyimage.com/100x100`}
                alt={`${video.user.username} channel avatar`}
              />
              <div>
                <h4>
                <Link to={`/channel/${video.user.id}`}>
                  {video.user.username}
                </Link>
                </h4>
                <span className="text-sm text-sColor">
                  {video.subscribersCount} subscribers
                </span>
              </div>
            </div>
            {!video.isVideoMine && (
              <SubscribeButton
                onClick={handleToggleSubscribe}
                condition={video.isSubscribed}
              />
            )}
          </div>
          <p className="py-4">{video.description}</p>
        </div>

        {/* Add Comment Component */}
        <Comments video={video} />
      </div>

      {/* Related Videos */}
      <div className="hidden lg:flex lg:flex-col lg:col-span-3">
        <h3 className="my-4">Up Next</h3>
        {next
          .filter((v) => v.id !== video.id)
          .slice(0, 10)
          .map((video) => (
            <VideoCard key={video.id} hideAvatar video={video} />
          ))}
      </div>
    </div>
  );
};

export default WatchVideo;
