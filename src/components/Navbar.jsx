import React from "react";
import { AppsIcon, HamburgerIcon, LogoIcon, SettingsIcon } from "./Icons";
import { GoogleAuth, Search, UploadVideo, UserDropdown } from ".";
import { NavLink } from "react-router-dom";
import { useAuth } from "context/authContext";

const Navbar = ({ toggleSidebar }) => {
  const user = useAuth();

  return (
    <div className="z-50 dark:text-white dark:bg-grey fixed px-6 flex items-center justify-between h-[64px] w-full">
      <div className="flex items-center">
        <HamburgerIcon onClick={toggleSidebar} className="cursor-pointer" />
        <span className="ml-3 py-1">
          <NavLink to="/">
            <LogoIcon style={{ width: 80, height: 24 }} />
          </NavLink>
        </span>
      </div>
      <Search />

      <ul className="flex items-center space-x-3 md:space-x-5">
        <li>
          {user ? <UploadVideo /> : <AppsIcon />}
        </li>
        <li>
          {user ? <AppsIcon /> : <SettingsIcon />}
        </li>
        <li>
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <GoogleAuth elementId="signIn" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
