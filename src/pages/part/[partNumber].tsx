import Comment, { IComment } from "@/components/comment";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const PartInfo = () => {
  const router = useRouter();
  const { partNumber } = router.query;

  return <span>{partNumber}</span>;
};

const comments: IComment[] = [
  {
    id: 343,
    content: "Hello Bungie",
  },
  {
    id: 342,
    content: "Shrimp",
  },
  {
    id: 980,
    content: "Lurum ipsom",
  },
  {
    id: 9280,
    content: "Lurum Carrot",
  },
];

export default function Home() {
  return (
    <>
      {comments.map((singleComment, i) => (
        <Comment comment={singleComment} key={i + " " + singleComment.id} />
      ))}
    </>
  );
}
