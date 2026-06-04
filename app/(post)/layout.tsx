import { Header } from "./header";
import { PostNav } from "./post-nav";
import { getPosts } from "../get-posts";

export const revalidate = 300;

export default async function Layout({ children }) {
  const posts = await getPosts();

  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10">
      <Header posts={posts} />

      {children}

      <PostNav posts={posts} />
    </article>
  );
}
