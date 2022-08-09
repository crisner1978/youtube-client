import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 items-center text-center space-y-4">
      <img
        className="flex w-[300px] h-[200px] object-contain"
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1659706068/my-upload/yo1rtcjrk4zj5zx3pirv.png"
        alt="Error Page Pic"
      />
      <br />
      <p className="text-2xl sm:text-3xl font-semibold">No results found...</p>
      <p className="text-sColor text-sm sm:text-lg">
        Try different keywords or remove search filters.
      </p>
    </div>
  );
};

export default NotFound;
