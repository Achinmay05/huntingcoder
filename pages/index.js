import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/blog">Blog</Link>
          </li>

          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <main className={`${styles.main} ${inter.className}`}>


        <div className={styles.center}>
          <h1>Hunting Coder</h1>
        </div>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2024?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2024?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2024?</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </main>
    </>
  );
}
