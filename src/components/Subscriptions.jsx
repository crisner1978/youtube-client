import React from "react";
import { NavLink } from "react-router-dom";

const Subscriptions = ({ user }) => {
  if (!user) return null;

  return (
    <div className="w-[240px]">
      {user.channels.length ? (
        <h4 className="uppercase mb-2 text-sColor pt-1 pl-6 tracking-wider font-semibold">Subscriptions</h4>
      ) : null}
      {user.channels.length
        ? user.channels.map((channel) => (
            <NavLink
              key={channel.id}
              to={`/channel/${channel.id}`}
              className={({ isActive }) =>
                isActive
                  ? "group flex w-full items-center space-x-3 pl-6  bg-darkGrey text-white py-1 cursor-pointer transition-all duration-200"
                  : "group flex w-full items-center space-x-3 pl-6 py-1 hover:bg-darkGrey text-gray-200 cursor-pointer transition-all duration-200"
              }>
              <div className="flex items-center gap-x-4">
                <img
                  className="h-9 w-9 rounded-full"
                  src={channel.avatar}
                  alt={channel.username}
                />
                <h3 className="group-hover:text-blue text-base font-semibold">{channel.username}</h3>
              </div>
            </NavLink>
          ))
        : null}
    </div>
  );
};

export default Subscriptions;
