import React from "react";
import type { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  console.log(author);

  return (
    <div className="px-5 py-7 border-y border-y-slate-600">
      {post.content}
    </div>
  );
};

export default PostView;
