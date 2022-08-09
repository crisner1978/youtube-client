import { useQuery } from "@tanstack/react-query";
import { ErrorMessage, VideoCard } from "../components";
import React from "react";
import HomeSkeleton from "skeletons/HomeSkeleton";
import { client } from "utils/api-client";

const Home = () => {
  const {
    data: videos,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(["Home"], () =>
    client.get("/videos").then((res) => res.data.videos)
  );

  if (isLoading) return <HomeSkeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="max-w-5xl mx-auto p-5 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-8 mt-2">
        {isSuccess &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </div>
    </div>
  );
};

export default Home;
