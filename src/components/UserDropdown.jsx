import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { signoutUser } from "utils/api-client";
import { ChannelIcon, SignoutIcon } from "./Icons";

function UserDropdown({ user }) {
  const navigate = useNavigate()

  return (
    <Popover className="relative flex">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? "" : "text-opacity-90"} outline-none
            }
          }
          `}>
            <img
              className="cursor-pointer w-9 h-9 rounded-full object-cover"
              src={`${user?.avatar}`}
              alt={user?.username}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute -right-32 z-10 mt-[45px] w-[250px] -translate-x-1/2 transform lg:max-w-3xl bg-grey border-darkGrey border-l border-b border-r">
              <div className=" overflow-hidden p-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <div onClick={() => navigate(`/channel/${user.id}`)} className="group flex px-10 py-2 items-center space-x-3 hover:bg-darkGrey cursor-pointer">
                  <ChannelIcon className="w-9 h-9 group-hover:fill-blue" />
                  <span className="text-white group-hover:text-blue">Your channel</span>
                </div>
                <div onClick={signoutUser} className="group flex px-10 py-2 items-center space-x-3 hover:bg-darkGrey cursor-pointer">
                  <SignoutIcon className="w-9 h-9 group-hover:fill-blue" />
                  <span className="text-white group-hover:text-blue">Sign out</span>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default UserDropdown;
