import React from "react";
import { Link } from "react-router-dom";

const ChannelTabChannels = ({ channels }) => {
  if (!channels.length) return <p>Not subscribed to any channels yet.</p>;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:max-w-6xl mx-auto gap-8 mt-2">
      {channels.map((channel) => (
        <Link key={channel.id} to={`/channel/${channel.id}`}>
          <div className="flex flex-col justify-center">
            <img className="w-28 h-28 rounded-full mb-3 object-cover" src={channel.avatar} alt={`${channel.avatar} channel avatar`} />
            <h3>{channel.username}</h3>
            <p className="text-sColor">{channel.subscribersCount} subscribers</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChannelTabChannels;
