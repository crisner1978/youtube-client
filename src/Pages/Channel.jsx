import React, { useState } from "react";
import {
  ChannelTabAbout,
  ChannelTabChannels,
  ChannelTabVideo,
  EditProfile,
  ErrorMessage,
  SignUpCard,
  SubscribeButton,
} from "../components";
import { useAuth } from "../context/authContext";
import { PlayIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client, toggleSubscribeUser } from "../utils/api-client";
import ChannelSkeleton from "../skeletons/ChannelSkeleton";
import useAuthAction from "../hooks/useAuthAction";

const Channel = () => {
  const [tab, setTab] = useState("VIDEOS");
  const user = useAuth();
  const { channelId } = useParams();
  const handleAuthAction = useAuthAction();

  const loggedInUserId = user ? user.id : undefined;
  const userId = channelId || loggedInUserId;

  const {
    data: channel,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["Channel", userId],
    () => client.get(`/users/${userId}`).then((res) => res.data.user),
    {
      enabled: userId !== undefined,
    }
  );

  if (!user) {
    return (
      <SignUpCard
        icon={<PlayIcon className="w-32 h-32" />}
        title="Manage your videos"
        description="Sign in to upload and manage your videos, pre-recorded or live"
      />
    );
  }

  if (isLoading) return <ChannelSkeleton />;
  if (isError) return <ErrorMessage error={error} />;

  console.log({ channel });

  function handleToggleSubscribe() {
    handleAuthAction(toggleSubscribeUser, channel.id);
  }

  return (
    <div className="bg-black min-h-screen pb-24">
      <div className="h-44">
        <img
          className="w-full h-full"
          src={channel.cover}
          alt={channel.username}
        />
      </div>

      {/* header tabs */}
      <div className="py-5 px-4 pb-0 bg-background">
        <div className="w-4/5 flex mx-auto justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src={channel.avatar}
              alt={channel.username}
            />
            <div className="ml-4">
              <h3 className="text-lg sm:text-xl font-semibold ">
                {channel.username}
              </h3>
              <span className="text-sColor">
                {channel.subscribersCount} subscribers
              </span>
            </div>
          </div>
          {channel.isMe && <EditProfile profile={channel} />}

          {!channel.isMe && (
            <SubscribeButton
              onClick={handleToggleSubscribe}
              condition={channel.isSubscribed}
            />
          )}
        </div>

        <div className="mt-6 w-5/6 mx-auto">
          <ul className="flex items-center uppercase space-x-8 tracking-wider font-semibold">
            <li
              className={`${
                tab === "VIDEOS" && "border-white border-b-2 text-white"
              } text-sColor cursor-pointer pb-1`}>
              Videos
            </li>
            <li
              className={`${
                tab === "CHANNELS" && "border-white border-b-2 text-white"
              } text-sColor cursor-pointer pb-1`}>
              Channels
            </li>
            <li
              className={`${
                tab === "ABOUT" && "border-white border-b-2 text-white"
              } text-sColor cursor-pointer pb-1`}>
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 w-full sm:w-10/12 mx-auto">
        {tab === "VIDEOS" && <ChannelTabVideo videos={channel.videos} />}
        {tab === "CHANNELS" && <ChannelTabChannels channels={channel.channels} />}
        {tab === "ABOUT" && <ChannelTabAbout about={channel.about} />}
      </div>
    </div>
  );
};

export default Channel;
