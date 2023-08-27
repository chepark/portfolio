import * as React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <div className="mt-16 md:mt-28">
      {posts.map((post) => {
        return <PostListItem key={post.meta.id} meta={post.meta} />;
      })}
    </div>
  );
};

export default PostList;
