import { getAllPosts } from "@/utils/api";
import { PostType } from "@/types";

export default async function Home() {
  const postsData = await getAllPosts();
  const posts: PostType[] = postsData[0] || [];
  console.log(posts);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">記事一覧 </h1>
      <div className="flex flex-col items-center justify-center w-1/2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-center justify-center w-1/2 p-4 border-2 border-gray-300 rounded-md"
          >
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p className="text-sm">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
