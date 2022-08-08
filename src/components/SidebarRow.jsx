import React from "react";
import { NavLink } from "react-router-dom";

const SidebarRow = ({ Icon, title, pathname }) => {
  return (
    <NavLink
      to={pathname}
      className={({ isActive }) =>
        isActive
          ? "group flex w-full items-center space-x-3 pl-6 py-2 bg-darkGrey text-white cursor-pointer transition-all duration-200"
          : "group flex w-full items-center space-x-3 pl-6 py-2 hover:bg-darkGrey text-gray-200 cursor-pointer transition-all duration-200"
      }>
      <Icon className="h-6 w-6 group-hover:text-blue " />
      <p className="group-hover:text-blue text-base font-light">
        {title}
      </p>
    </NavLink>
  );
};
export default SidebarRow;
