import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ErrorMessage, TrendingCard } from "../components";
import TrendingSkeleton from "../skeletons/TrendingSkeleton";
import { client } from "../utils/api-client";

const Trending = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["Trending"],
    () => client.get("/videos/trending").then((res) => res.data.videos)
  );

  if (isLoading) return <TrendingSkeleton />;

  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="max-w-sm sm:max-w-3xl mx-auto p-5 pb-24">
      <h2 className="text-xl sm:text-2xl font-semibold">Trending</h2>
      <div className="">
        {isSuccess
          ? data.map((video) => <TrendingCard key={video.id} video={video} />)
          : null}
      </div>
    </div>
  );
};

export default Trending;
