import React from "react";

export interface IComment {
  id: number;
  content: string;
}

interface iProps {
  comment: IComment;
}

function Comment({ comment }: iProps) {
  return (
    <div className="comment">
      <p>Your ID is {comment.id}.</p>
      <p>Comment: {comment.content}</p>
      <br />
    </div>
  );
}

export default Comment;
