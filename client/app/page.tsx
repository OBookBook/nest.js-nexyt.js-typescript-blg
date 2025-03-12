import { getAllPosts } from "@/utils/api";

export default async function Home() {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
