import React from "react";
import { Link } from "react-router-dom";
import { SubscribeButton } from ".";
import useAuthAction from "../hooks/useAuthAction";
import { toggleSubscribeUser } from "../utils/api-client";
import { truncate } from "../utils/truncate";

const ChannelInfo = ({ channel }) => {
  const handleAuthAction = useAuthAction();
  
  function handleToggleSubscribe() {
    handleAuthAction(toggleSubscribeUser, channel.id);
    // toggleSubscribeUser(channelId)
  }
  return (
    <div className="flex items-center justify-between my-8">
      <Link to={`/channel/${channel.id}`} className="flex items-center space-x-4">
        <img
          className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full object-cover mr-2 sm:mr-5"
          src={channel?.avatar || `https://dummyimage.com/100x100`}
          alt={`${channel.username} channel avatar`}
        />
        <div>
          <h3 className="sm:text-xl font-semibold">{channel?.username}</h3>
          <p className="text-sm text-sColor">
            <span>{channel.subscribersCount} subscribers</span>{" "}
            <span className="hidden sm:inline">•</span>{" "}
            <span className="hidden sm:inline">{channel.videosCount} videos</span>
          </p>
          <p className="text-sColor w-5/6">{truncate(channel.about, 65)}</p>
        </div>
      </Link>
      {!channel.isMe && (
        <SubscribeButton
          onClick={handleToggleSubscribe}
          condition={channel.isSubscribed}
        />
      )}
    </div>
  );
};

export default ChannelInfo;
