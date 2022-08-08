import React from "react";

const NoResults = ({ title, text }) => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 items-center text-center space-y-4">
      <img
        className="flex w-[300px] h-[200px] object-contain"
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1659706147/my-upload/axzizx4ishinyhscno64.png"
        alt="No Results"
      />
      <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      <p className="text-sColor text-sm sm:text-lg">{text}</p>
    </div>
  );
};

export default NoResults;
