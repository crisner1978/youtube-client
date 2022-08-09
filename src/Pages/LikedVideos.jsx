import { ThumbUpIcon } from "@heroicons/react/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ErrorMessage, SignUpCard, TrendingCard } from "../components";
import { useAuth } from "../context/authContext";
import TrendingSkeleton from "../skeletons/TrendingSkeleton";
import { client } from "../utils/api-client";

const LikedVideos = () => {
  const user = useAuth();

  const {
    data: videos,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(
    ["LikedVideos"],
    () => client.get("/users/liked-videos").then((res) => res.data.videos),
    {
      enabled: user !== undefined,
    }
  );

  if (!user) {
    return (
      <SignUpCard
        icon={<ThumbUpIcon className="w-32 h-32" />}
        title="Don't miss new videos"
        description="Sign in to see updates from your favorite YouTube channels"
      />
    );
  }

  if (isLoading) return <TrendingSkeleton />;

  if (isError) return <ErrorMessage error={error} />;
  console.log("data", videos);

  return (
    <div className="max-w-sm sm:max-w-3xl mx-auto p-5 pb-24">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Liked Videos</h2>
      {isSuccess && !videos.length && (
        <p className="text-sColor">
          Videos that you have liked will show up here
        </p>
      )}

      {isSuccess
        ? videos.map((video) => <TrendingCard key={video.id} video={video} />)
        : null}
    </div>
  );
};

export default LikedVideos;
