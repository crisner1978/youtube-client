import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { VideoPlayer } from ".";
import { useAuth } from "../context/authContext";
import { addVideo } from "../utils/api-client";
import { CloseIcon } from "./Icons";

const options = {
  style: {
    marginBottom: "20px",
    zIndex: 9999,
  },
};

const UploadVideoModal = ({
  handleClose,
  previewVideo,
  thumbnail,
  videoUrl,
  defaultTitle,
}) => {
  const [openSnackbar] = useSnackbar(options);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [tab, setTab] = useState("PREVIEW");
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState("");
  const user = useAuth();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  async function handleTab() {
    if (tab === "PREVIEW") {
      setTab("FORM");
    } else {
      if (!title.trim() || !description.trim()) {
        return openSnackbar("Please fill in all the fields");
      }

      const video = {
        title,
        description,
        url: videoUrl,
        thumbnail,
      };

      await addVideo(video);
      handleClose();
      openSnackbar("Video published");
      navigate(`/channel/${user.id}`);
    }
  }

  return (
    <div
      className="flex justify-center  fixed inset-0 z-10 bg-overlay-black/60 animated fadeIn"
      onClick={handleClickOutside}>
      <div
        ref={modalRef}
        className="min-w-[350px] sm:min-w-[450px] mt-10 dark:bg-grey border-grey border shadow-lg shadow-darkGreyrey bg-white flex flex-col rounded-lg mb-20">
        <div className="flex justify-between items-center my-4 mx-4">
          <div className="flex items-center space-x-4">
            <CloseIcon
              className="cursor-pointer fill-red h-7 w-7"
              onClick={handleClose}
            />
            <h3>{videoUrl ? "Video Uploaded!" : "Uploading..."}</h3>
          </div>
          <div
            className={
              videoUrl ? "block mr-1 bg-red px-4 py-1 rounded-lg" : "hidden"
            }>
            <button className="uppercase" onClick={handleTab}>
              {tab === "PREVIEW" ? "Next" : "Upload"}
            </button>
          </div>
        </div>

        {tab === "PREVIEW" && (
          <div className="">
            <VideoPlayer previewUrl={previewVideo} video={videoUrl} isModal />
          </div>
        )}

        {tab === "FORM" && (
          <div className="flex flex-col justify-center items-center w-full text-center p-4">
            <h2 className="dark:text-white text-black font-normal text-2xl mb-4">
              Video Details
            </h2>
            <div className="flex flex-col w-full max-w-xl space-y-3 py-10 sm:px-4 border-t dark:border-black-3 border-gray-1">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter your video title"
                className="bg-background dark:text-white px-4 py-3 rounded-lg outline-none"
              />
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows={8}
                placeholder="Tell viewers about your video"
                className="bg-background dark:text-white px-4 py-3 rounded-lg outline-none"
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
