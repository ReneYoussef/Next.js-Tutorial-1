import Link from "next/link";

export default function home() {
  return (
    <>
   
      <h1>welcome home</h1>
      <Link href="/blog">Blog</Link>
    <Link href="/product">Product</Link>
    </>
  );
}
