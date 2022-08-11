import React from "react";

const EditProfile = ({ channel, onClick }) => {
  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={onClick}
          className="bg-darkGrey text-white px-3 py-2 uppercase rounded-lg hoverBright">
         Edit Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
