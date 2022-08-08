import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ChannelSuggestions, ErrorMessage, SignUpCard, VideoCard } from "../components";
import { SubIcon } from "../components/Icons";
import { useAuth } from "../context/authContext";
import HomeSkeleton from "../skeletons/HomeSkeleton";
import { client } from "../utils/api-client";

const SubscriptionsPage = () => {
  const user = useAuth()

  const { data: feed, isLoading, isError, error, isSuccess } = useQuery(['Subscriptions'], () => client.get('/users/subscriptions').then((res) => res.data.feed), {
    enabled: user !== undefined
  })

  if (isLoading) return <HomeSkeleton />
  if (isError) return <ErrorMessage error={error} />
  if (!isLoading && !feed.length) return <ChannelSuggestions />

  console.log(feed)

  if (!user) {
    return (
      <SignUpCard
        icon={<SubIcon className="w-32 h-32" />}
        title="Don't miss new videos"
        description="Sign in to see updates from your favorite YouTube channels"
      />
    );
  }
  return (
    <div className="max-w-5xl mx-auto p-5 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-8">
        {isSuccess ? feed.map((video) => (
          <VideoCard key={video.id} video={video} hideAvatar />
        )) : null}
      </div>
      
    </div>
  );
};

export default SubscriptionsPage;
