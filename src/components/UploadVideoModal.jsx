import React, { useRef, useState } from "react";
import { VideoPlayer } from ".";
import { CloseIcon } from "./Icons";

const UploadVideoModal = ({ handleClose, previewVideo, thumbnail, videoUrl }) => {
  const modalRef = useRef(null);
  const [tab, setTab] = useState("PREVIEW");

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };
  return (
    <div
      className="flex justify-center items-center fixed inset-0 z-10 bg-overlay-black animated fadeIn"
      onClick={handleClickOutside}>
      <div
        ref={modalRef}
        className="w-11/12 dark:bg-grey bg-white flex flex-col rounded-lg">
        <div className="flex justify-between items-center mt-4 mx-4">
          <div className="flex items-center space-x-4" onClick={handleClose}>
            <CloseIcon className="cursor-pointer dark:fill-white fill-black-1 h-7 w-7" />
            <h3>Video Uploaded!</h3>
          </div>
          <div className="mr-1">
            <button>{tab === "PREVIEW" ? "Next" : "Upload"}</button>
          </div>
        </div>

        {tab === "PREVIEW" && (
          <div>
            <VideoPlayer />
          </div>
        )}

        {tab === "FORM" && (
          <div className="flex flex-col justify-center items-center w-full text-center p-4">
            <h2 className="dark:text-white text-black font-normal text-2xl mb-4">
              Video Details
            </h2>
            <div className="flex flex-col w-full max-w-xl space-y-3 p-10 sm:px-4 border-t dark:border-black-3 border-gray-1">
              <input
                type="text"
                placeholder="Enter your video title"
                className="bg-background dark:text-white placeholder:text-gray-1 px-4 py-3 rounded-lg outline-none"
              />
              <textarea
                placeholder="Tell viewers about your video"
                className="bg-background dark:text-white placeholder:text-gray-1 px-4 py-3 rounded-lg outline-none"
              />
            </div>
          </div>
        )}

        {/* <div className="flex justify-center items-center p-4">
          {/* {footer} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UploadVideoModal;
