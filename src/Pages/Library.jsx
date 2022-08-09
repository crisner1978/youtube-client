import React from "react";
import { History, LikedVideos } from ".";
import { SignUpCard } from "../components";
import { LibIcon } from "../components/Icons";
import { useAuth } from "../context/authContext";

const Library = () => {
  const user = useAuth();

  if (!user) {
    return (
      <SignUpCard
        icon={<LibIcon className="w-32 h-32" />}
        title="Don't miss new videos"
        description="Sign in to see updates from your favorite YouTube channels"
      />
    );
  }
  return (
    <>
      <History />
      <LikedVideos />
    </>
  );
};

export default Library;
