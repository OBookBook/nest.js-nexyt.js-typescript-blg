import { PostType } from "@/types";

export async function getAllPosts() {
  const response = await fetch("http:localhost:5000/posts", {
    method: "GET",
  });
  const data = await response.json();

  return data;
}

export async function getPostById(id: string) {
  const response = await fetch(`http:localhost:5000/posts/${id}`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
}

export async function createPost(post: PostType) {
  const response = await fetch("http:localhost:5000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("投稿の作成に失敗しました");
  }

  const data = await response.json();

  return data;
}
