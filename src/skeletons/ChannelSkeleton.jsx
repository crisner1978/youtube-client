import React from "react";

const ChannelSkeleton = () => {
  return (
    <div className="min-h-screen">
      <div className="h-44 w-full skeleton" />
      <div className="flex items-center w-4/5 my-4 mx-auto">
        <div className="mr-4 w-32 h-32 mt-4 rounded-full skeleton" />
        <div className="w-4/5 space-y-4">
          <div className="h-5 w-[250px] skeleton" />
          <div className="h-5 w-[200px] skeleton" />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-8">
        <div className="h-48 skeleton" />
        <div className="h-48 skeleton" />
        <div className="h-48 skeleton" />
      </div>
    </div>
  );
};

export default ChannelSkeleton;
