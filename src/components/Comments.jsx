import React, { useState } from 'react'
import { useSnackbar } from 'react-simple-snackbar'
import { CommentList } from ".";
import { useAuth } from "../context/authContext";
import { addComment } from '../utils/api-client';

const options = {
  style: {
    marginBottom: "20px",
    zIndex: 9999,
  },
};

const Comments = ({ video }) => {
  const user = useAuth();
  const [openSnackbar] = useSnackbar(options)
  const [comment, setComment] = useState('')

  async function handleAddComment(e) {
    if (e.keyCode === 13) {
      e.target.blur();

      if (!comment.trim()) {
        return openSnackbar("Please write a comment")
      }
      addComment({ video, comment }).then(() => setComment('')).catch(() => openSnackbar("Sign in to add a comment"))
    }
  }

  return (
    <div className="my-4">
      <h3>{video.comments.length} comments</h3>
      <div className="flex space-x-4 items-center mt-6 mb-8">
        {user ? (
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={user.avatar}
            alt={user.username}
          />
        ) : (
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://dummyimage.com/100x100"
            alt="default user"
          />
        )}

        <textarea
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handleAddComment}
          value={comment}
          className="bg-black dark:text-white px-4 py-3 rounded-lg outline-none w-full "
          placeholder="Add a public comment..."
          rows={1}
        />
      </div>
      {/* Comment List Component */}
      <CommentList comments={video.comments} />
    </div>
  );
};

export default Comments;
