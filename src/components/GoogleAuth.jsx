import React, { useEffect } from "react";
import { authenticate } from "utils/api-client";

const GoogleAuth = ({ elementId, buttonSize }) => {
  useEffect(() => {
    /* global google */
    if (google) {
      google?.accounts.id.initialize({
        client_id:
          "73535695397-05ihej7t5p58j85rmsovfvodaa30dkeo.apps.googleusercontent.com",
        callback: authenticate,
      });
      google?.accounts.id.renderButton(document.getElementById(elementId), {
        theme: "outlined",
        size: buttonSize,
        text: "signin",
      });
    }
  }, [elementId, buttonSize]);

  return <button id={elementId} tabIndex={0} type="button"></button>;
};

export default GoogleAuth;
