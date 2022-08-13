import React, { useRef, useState } from "react";
import { uploadMedia } from "../utils/uploadMedia";
import { CloseIcon } from "./Icons";
import { useSnackbar } from "react-simple-snackbar";
import { updateUser } from "../utils/api-client";

const options = {
  style: {
    marginBottom: "20px",
    zIndex: 9999,
  },
};

const EditProfileModal = ({ handleClose, profile }) => {
  const [openSnackbar] = useSnackbar(options);
  const modalRef = useRef();
  const [cover, setCover] = useState(profile.cover);
  const [avatar, setAvatar] = useState(profile.avatar);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  async function handleCoverUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const coverImg = await uploadMedia({
        type: "image",
        file,
        preset: "youtube-cover",
      });
      setCover(coverImg);
    }
  }

  async function handleAvatarUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const avatarImg = await uploadMedia({
        type: "image",
        file,
        preset: "youtube-avatar",
      });
      setAvatar(avatarImg);
    }
  }

  async function handleEditProfile(event) {
    event.preventDefault()
    const username = event.target.username.value
    const about = event.target.about.value
    
    if (!username.trim()) {
      return openSnackbar("Username cannot be empty")
    }
    const userObject = {
      username,
      about,
      avatar,
      cover
    }
    await updateUser(userObject)
    openSnackbar("Profile Updated Successfully")
    handleClose()
  }

  return (
    <div
      className="flex justify-center fixed inset-0 z-30 bg-overlay-black/60 animated fadeIn"
      onClick={handleClickOutside}>
      <div
        ref={modalRef}
        className="min-w-[350px] sm:min-w-[400px] w-6/12 mt-16 dark:bg-black border-grey border shadow-lg shadow-darkGreyrey flex flex-col rounded-lg mb-8">
        <form onSubmit={handleEditProfile} className="flex flex-col px-4">
          <div className="flex justify-between items-center py-4 border-b border-b-grey">
            <h3 className="flex items-center space-x-4">
              <CloseIcon
                className="cursor-pointer fill-red h-7 w-7"
                onClick={handleClose}
              />
              <span className="font-semibold text-lg">Edit Profile</span>
            </h3>

            <button
              className="block mr-1 bg-red px-4 py-1 rounded-lg hoverBright uppercase"
              type='submit'>
              Save
            </button>
          </div>

          <div>
            <label htmlFor="cover-upload">
              <img
                className="h-48 object-cover"
                src={cover}
                width="100%"
                alt="cover"
              />
            </label>
            <input
              onChange={handleCoverUpload}
              id="cover-upload"
              accept="image/*"
              type="file"
              style={{ display: "none" }}
            />
          </div>

          <div className="mb-4 max-w-fit ml-5 -mt-8 rounded-full">
            <label htmlFor="avatar-upload">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={avatar}
                alt="avatar"
              />
            </label>
            <input
              onChange={handleAvatarUpload}
              id="avatar-upload"
              accept="image/*"
              type="file"
              style={{ display: "none" }}
            />
          </div>
          <input
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
            defaultValue={profile.username}
            type="text"
            placeholder="Change your username"
            id="username"
            required
            className="bg-background dark:text-white px-4 py-3 rounded-lg outline-none mb-4"
          />
          <textarea
            // onChange={(e) => setDescription(e.target.value)}
            // value={description}
            defaultValue={profile.about}
            rows={2}
            id="about"
            placeholder="Tell viewers about your channel"
            className="bg-background dark:text-white px-4 py-3 rounded-lg outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
