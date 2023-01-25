import Link from "next/link";
import Head from "next/head";
import { getPostList } from "../lib/posts";

export async function getStaticProps() {
  const postList = await getPostList();
  return {
    props: { postList },
  };
}

function HomePage({ postList }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>Runze's Blog</h1>
        <ul>
          {postList.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
          {/* <li>
            <Link href="/posts/first-post">First Post</Link>
          </li>
          <li>Two</li>
          <li>Three</li> */}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
