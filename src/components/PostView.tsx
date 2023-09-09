import React from "react";
import { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="px-5 py-7 border-y border-y-slate-600">
      {post.content}
    </div>
  );
};

export default PostView;
