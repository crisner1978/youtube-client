import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ChannelInfo, ErrorMessage } from ".";
import SuggestionSkeleton from "../skeletons/SuggestionSkeleton";
import { client } from "../utils/api-client";

const ChannelSuggestions = () => {
  const {
    data: channels,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["Channels"], () =>
    client.get("/users").then((res) => res.data.channels)
  );

  if (isLoading) return <SuggestionSkeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className="max-w-3xl mx-auto p-5 pb-24">
      <h2 className="text-xl sm:text-2xl font-semibold">Suggestions For You</h2>
      {isSuccess
        ? channels.map((channel) => (
            <ChannelInfo key={channel.id} channel={channel} />
          ))
        : null}
    </div>
  );
};

export default ChannelSuggestions;
