import React from "react";
import { ErrorMessage } from ".";

const ErrorFallback = ({ error }) => {
  return (
    <ErrorMessage error={error} style={{ height: "100vh", marginTop: 0 }} />
  );
};

export default ErrorFallback;
