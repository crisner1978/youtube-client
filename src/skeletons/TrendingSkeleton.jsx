import React from "react";

const TrendingSkeleton = () => {
  return (
    <div className="max-w-sm sm:max-w-3xl mx-auto p-5 pb-24 space-y-4">
      <div className="h-8 w-[300px] skeleton mb-6 mt-2" />
      <div className="flex-col sm:flex sm:flex-row">
        <div className="h-[250px] sm:w-64 sm:h-36 skeleton mb-4" />
        <div className="sm:ml-6 space-y-5">
          <div className="h-7 w-[350px] skeleton" />
          <div className="h-7 w-[300px] skeleton" />
        </div>
      </div>
      <div className="flex-col sm:flex sm:flex-row">
        <div className="h-[250px] sm:w-64 sm:h-36 skeleton mb-4" />
        <div className="sm:ml-6 space-y-5">
          <div className="h-7 w-[350px] skeleton" />
          <div className="h-7 w-[300px] skeleton" />
        </div>
      </div>

      <div className="flex-col sm:flex sm:flex-row">
        <div className="h-[250px] sm:w-64 sm:h-36 skeleton mb-4" />
        <div className="sm:ml-6 space-y-5">
          <div className="h-7 w-[350px] skeleton" />
          <div className="h-7 w-[300px] skeleton" />
        </div>
      </div>
    </div>
  );
};

export default TrendingSkeleton;
