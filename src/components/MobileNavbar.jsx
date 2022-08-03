import React from "react";
import { ClockIcon, CollectionIcon, FireIcon, HomeIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom"

const MobileNavbar = () => {
  return (
    <nav className="border-t border-gray-3 bg-grey z-30 fixed bottom-0 left-0 w-full py-[0.8rem] px-4 sm:hidden">
      <div className="flex items-center justify-between">
        <MobileLinkIcon pathname="/" Icon={HomeIcon}/>
        <MobileLinkIcon pathname="feed/trending" Icon={FireIcon} />
        <MobileLinkIcon pathname="feed/subscriptions" Icon={CollectionIcon} />
        <MobileLinkIcon pathname="feed/history" Icon={ClockIcon} />
        <MobileLinkIcon pathname="feed/my_videos" Icon={ThumbUpIcon} />
      </div>
    </nav>
  );
};

export default MobileNavbar;


const MobileLinkIcon = ({ Icon, pathname }) => {
  return (
    <NavLink
      to={pathname}
      className={({ isActive }) =>
        isActive
          ? "group flex w-full items-center space-x-3 pl-6 py-3 text-white cursor-pointer transition-all duration-200"
          : "group flex w-full items-center space-x-3 pl-6 py-3 text-darkGrey cursor-pointer transition-all duration-200"
      }>
      <Icon className="h-6 w-6 group-hover:text-gray-300 " />
    </NavLink>
  );
};