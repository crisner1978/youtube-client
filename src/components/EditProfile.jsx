import React, { useState } from "react";
import { EditProfileModal } from ".";

const EditProfile = ({ profile }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div>
        <div className="flex items-center bg-black">
          <button
            className="bg-darkGrey px-3 py-2 uppercase rounded-lg hoverBright"
            onClick={() => setShowModal(true)}>
            Edit Profile
          </button>
        </div>
      </div>
      {showModal && (
        <EditProfileModal handleClose={closeModal} profile={profile} />
      )}
    </>
  );
};

export default EditProfile;
