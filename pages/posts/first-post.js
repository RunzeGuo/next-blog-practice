import Head from "next/head";
import { getPost } from "../../lib/posts.js";

export async function getStaticProps() {
  const post = await getPost("first-post");
  return {
    props: {
      post,
    },
  };
}

function FirstPostPage({ post }) {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;
