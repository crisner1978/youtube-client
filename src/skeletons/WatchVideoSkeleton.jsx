import React from "react";

const WatchVideoSkeleton = () => {
  return (
    <div className="grid grid-cols-[minmax(70,_1fr)] lg:grid-cols-10 gap-8 px-7 pb-24">
      <div className="space-y-4 lg:col-span-7">
        <div className="h-[340px] skeleton mb-8" />
        <div className="h-7 max-w-[300px] skeleton" />
        <div className="h-6 max-w-[200px] skeleton" />

        <div className="pt-8 flex items-center">
          <div className="h-24 w-24 rounded-full skeleton" />
          <div className="flex-1 ml-5 space-y-5">
            <div className="h-5 max-w-[240px] skeleton" />
            <div className="h-5 max-w-[160px] skeleton" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-3 lg:space-y-8 mt-5">
        <div className="h-6 max-w-[200px] mb-5 skeleton" />
        <div className="h-48 skeleton" />
        <div className="h-48 skeleton" />
      </div>
    </div>
  );
};

export default WatchVideoSkeleton;
