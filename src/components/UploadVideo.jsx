import React, { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { uploadMedia } from "utils/uploadMedia";
import { UploadVideoModal } from ".";
import { UploadIcon } from "./Icons";
import path from "path";

const options = {
  style: {
    marginBottom: "70px",
  },
};

const UploadVideo = () => {
  const [openSnackbar] = useSnackbar(options);
  const [showModal, setShowModal] = useState(false);
  const [previewVideo, setPreviewVideo] = useState("");
  const [defaultTitle, setDefaultTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const closeModal = () => setShowModal(false)

  async function handleUploadVideo(event) {
    event.persist();
    const file = event.target.files[0];
    const title = path.basename(file.name, path.extname(file.name));
    setDefaultTitle(title);
    
    if (file) {
      const fileSize = file.size / 1000000;
      
      if (fileSize > 50) {
        return openSnackbar("Video file should be less than 50MB");
      }
      const uploadObject = {
        type: "video",
        file,
        preset: "youtube-videos",
      };

      const videoPreview = URL.createObjectURL(file);
      setPreviewVideo(videoPreview);
      setShowModal(true);
      const url = await uploadMedia(uploadObject);

      const extension = path.extname(url);
      setThumbnail(url.replace(extension, ".jpg"));
      setVideoUrl(url);
      event.target.value = "";
    }
  }

  console.log(previewVideo)

  return (
    <div>
      <label htmlFor="video-upload">
        <UploadIcon className="cursor-pointer" />
      </label>
      <input
        type="file"
        accept="video/*"
        name="video-upload"
        id="video-upload"
        className="hidden"
        onChange={handleUploadVideo}
      />
      {showModal && (
        <UploadVideoModal
          previewVideo={previewVideo}
          thumbnail={thumbnail}
          defaultTitle={defaultTitle}
          videoUrl={videoUrl}
          handleClose={closeModal}
        />
      )}
    </div>
  );
};

export default UploadVideo;
