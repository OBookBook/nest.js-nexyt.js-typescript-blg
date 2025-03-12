import { createPost } from "@/utils/api";

const PostPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">投稿</h1>

      <form
        action={async (formData) => {
          "use server";

          try {
            const title = formData.get("title") as string;
            const content = formData.get("content") as string;
            const author = formData.get("author") as string;

            if (!title || !content || !author) {
              console.error("すべてのフィールドを入力してください");
              return;
            }

            const result = await createPost({
              id: 5,
              title,
              content,
              author,
              createAt: new Date().toISOString(),
            });
            console.log("投稿成功:", result);
          } catch (error) {
            console.error("投稿エラー:", error);
          }
        }}
        className="flex flex-col gap-4 "
      >
        <label htmlFor="title">タイトル</label>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <label htmlFor="content">内容</label>
        <input
          type="text"
          name="content"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <label htmlFor="author">著者</label>
        <input
          type="text"
          name="author"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          投稿
        </button>
      </form>
    </div>
  );
};

export default PostPage;
