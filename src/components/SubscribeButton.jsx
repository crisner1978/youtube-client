import React from "react";

const SubscribeButton = ({ onClick, condition }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        condition ? "bg-darkGrey" : "bg-red"
      } px-3 py-2 uppercase rounded-lg hoverBright`}>
      {condition ? "Subscribed" : "Subscribe"}
    </button>
  );
};

export default SubscribeButton;
