import Link from "next/link";
import './globals.css';
export default function home() {
  return (
    <>
   
      <h1>welcome home</h1>
      <Link href="/blog">Blog</Link>
    <Link href="/product">Product</Link>

                        {/*breaking-news-123:dynamic route parameter and lang:query parameter */}
    <Link href="/articles/breaking-news-123?lang=en">Read in english</Link>
    <Link href="/articles/breaking-news-123?lang=fr">Read in french</Link>
    </>
  );
}
