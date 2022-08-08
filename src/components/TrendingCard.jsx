import React from "react";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../utils/date";

const TrendingCard = ({ video }) => {
  console.log(video);
  return (
    <div className="my-5 sm:flex space-y-2 sm:space-y-0">
      <Link to={`/watch/${video.id}`}>
        <img
          className="w-64 h-36 rounded-md shadow-lg"
          src={video.thumbnail}
          alt={video.title}
        />
      </Link>
      <div className="ml-3 sm:ml-5">
        <Link to={`/watch/${video.id}`}>
          <h3>{video.title}</h3>
        </Link>
        <p className="text-sColor">
          <span>{video.user.username}</span> <span>•</span>{" "}
          <span>{video.views} views </span>
          <span>•</span> <span>{formatCreatedAt(video.createdAt)}</span>
        </p>
        <p className="text-sColor">{video.description}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
