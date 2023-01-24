import Link from "next/link";
import NavBar from "../components/NavBar";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>Runze's Blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">First Post</Link>
          </li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
