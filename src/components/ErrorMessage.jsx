import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="h-full mt-32 flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-3xl">
        Oops, something went terribly wrong:
      </h2>
      <h3 className="text-3xl text-red font-bold">{error?.message}</h3>
    </div>
  );
};

export default ErrorMessage;
