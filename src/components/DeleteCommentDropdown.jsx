import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { DeleteIcon, SettingsIcon } from './Icons'

const DeleteCommentDropdown = () => {
  

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
            <Popover.Panel className="absolute -right-32 z-10 mt-[45px] w-[250px] -translate-x-1/2 transform lg:max-w-3xl bg-grey border-darkGrey border-l border-b border-r">
              <div>
                <DeleteIcon />
                <span>Delete Comment</span>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default DeleteCommentDropdown