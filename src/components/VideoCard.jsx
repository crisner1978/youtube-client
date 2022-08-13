import { Link } from "react-router-dom";
import { formatCreatedAt } from "utils/date";
import { DeleteVideoDropdown } from ".";

const VideoCard = ({ video, hideAvatar, noUsername }) => {
  return (
    <div className="rounded-md shadow-lg pb-4">
      <Link to={`/watch/${video.id}`}>
        <img className="rounded-md sm:h-48" src={video.thumbnail} alt={video.title} />
      </Link>
      <div className="flex mt-1">
        <div className="">
          {!hideAvatar && (
            <img
              className="rounded-full relative top-2 h-12 w-12 mr-4"
              src={video.user.avatar}
              alt={`${video.user.username}'s channel avatar`}
            />
          )}
        </div>
        <div className="flex-1 mt-1">
          <Link to={`/watch/${video.id}`}>
            <h4 className="truncate pb-1 font-semibold">{video.title}</h4>
          </Link>
          {!noUsername && (
            <Link to={`/channel/${video.user.id}`} className="text-sm">
              <span className="text-sColor">{video.user.username}</span>
            </Link>
          )}

          <p className="text-sm leading-4 text-sColor">
            <span>{video.views} views</span> <span>•</span>{" "}
            <span>{formatCreatedAt(video.createdAt)}</span>
          </p>
        </div>
        <DeleteVideoDropdown video={video} />
      </div>
    </div>
  );
};

export default VideoCard;
