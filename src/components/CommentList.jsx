import React from "react";
import { Link } from "react-router-dom";
import { DeleteCommentDropdown } from ".";
import { formatCreatedAt } from "../utils/date";

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};

export default React.memo(CommentList);

function Comment({ comment }) {
  return (
    <div className="flex mb-8">
      <Link to={`/channel/${comment.user.id}`}>
        <img className="w-10 h-10 object-cover rounded-full top-[2px] mr-4"
          src={comment.user.avatar}
          alt={`${comment.user.username} avatar`}
        />
      </Link>
      <div className="flex-1">
        <p className="text-sColor">
          <span className="font-bold text-white">
            <Link to={`/channel/${comment.user.id}`}>
              {comment.user.username}
            </Link>
          </span>
          <span className="ml-2">{formatCreatedAt(comment.createdAt)}</span>
        </p>
        <p>{comment.text}</p>
      </div>
      {/* Delete Comment Dropdown */}
      <DeleteCommentDropdown comment={comment} />
    </div>
  );
}
