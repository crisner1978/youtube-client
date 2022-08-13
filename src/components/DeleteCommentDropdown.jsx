import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useAuth } from "../context/authContext";
import { deleteComment } from "../utils/api-client";
import { DeleteIcon, SettingsIcon } from "./Icons";

const DeleteCommentDropdown = ({ comment }) => {
  const user = useAuth();

  const isCommentAuthor = comment.userId === user?.id;

  function handleDeleteComment() {
    deleteComment(comment)
  }

  if (isCommentAuthor) {
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
              <SettingsIcon />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute right-32 z-10 mt-[45px] w-[200px] translate-x-32 transform lg:max-w-3xl bg-grey border-darkGrey border-l border-b border-r">
                <div className="overflow-hidden p-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    onClick={handleDeleteComment}
                    className="group flex px-4 py-2 items-center space-x-3 hover:bg-darkGrey cursor-pointer">
                    <DeleteIcon />
                    <span>Delete Comment</span>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }
};

export default DeleteCommentDropdown;
