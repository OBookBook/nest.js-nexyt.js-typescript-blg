import React from "react";
import { getPostById } from "@/utils/api";

// http://localhost:3000/1
const PostDetail = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;
  const post = await getPostById(resolvedParams.id);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm">{post.content}</p>
    </div>
  );
};

export default PostDetail;
