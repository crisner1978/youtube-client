import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import {
  ChannelInfo,
  ErrorMessage,
  NoResults,
  TrendingCard,
} from "../components";
import TrendingSkeleton from "../skeletons/TrendingSkeleton";
import { client } from "../utils/api-client";

const SearchResults = () => {
  const { searchQuery } = useParams();

  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["SearchResults", searchQuery],
    async () => {
      const users = await client
        .get(`/users/search?find=${searchQuery}`)
        .then((res) => res.data.users);

      const videos = await client
        .get(`/videos/search?find=${searchQuery}`)
        .then((res) => res.data.videos);
      return { users, videos };
    }
  );

  if (isLoading) return <TrendingSkeleton />;

  if (isError) return <ErrorMessage error={error} />;

  if (isSuccess && !data.videos?.length && !data.users?.length)
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );

  return (
    <div className="max-w-3xl mx-auto p-5 pb-24">
      <h2 className="text-xl sm:text-2xl font-semibold">Search Results</h2>
      <div className="mt-4">
        {isSuccess
          ? data.users.map((channel) => (
              <ChannelInfo key={channel.id} channel={channel} />
            ))
          : null}
      </div>
      {isSuccess
        ? data.videos.map((video) => (
            <TrendingCard key={video.id} video={video} />
          ))
        : null}
    </div>
  );
};

export default SearchResults;
