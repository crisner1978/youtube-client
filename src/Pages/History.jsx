import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ErrorMessage, SignUpCard, TrendingCard } from "../components";
import { HistoryIcon } from "../components/Icons";
import { useAuth } from "../context/authContext";
import TrendingSkeleton from "../skeletons/TrendingSkeleton";
import { client } from "../utils/api-client";

const History = () => {
  const user = useAuth();

  const {
    data: videos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery(
    ["History"],
    () => client.get("/users/history").then((res) => res.data.videos),
    {
      enabled: user !== undefined,
    }
  );

  if (!user) {
    return (
      <SignUpCard
        icon={<HistoryIcon className="w-32 h-32" />}
        title="Don't miss new videos"
        description="Sign in to see updates from your favorite YouTube channels"
      />
    );
  }

  if (isLoading) return <TrendingSkeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="max-w-3xl mx-auto p-5 pb-2">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">History</h2>
      {isSuccess && !videos.length && (
        <p className="text-sColor">
          Videos that you have watched will show up here
        </p>
      )}
      {isSuccess
        ? videos.map((video) => <TrendingCard key={video.id} video={video} />)
        : null}
    </div>
  );
};

export default History;
