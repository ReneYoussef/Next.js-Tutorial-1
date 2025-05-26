import Link from "next/link"

export default function productList(){

    const productId=1000
    return (
    <>

    <Link href="/">Home</Link>
    <h1>product List</h1>
    <h3>
        <Link href="/product/1">product 1</Link>
    </h3>
    <h3>
        <Link href="/product/2">product 2</Link>
    </h3>
    <h3>
        <Link href="/product/3" replace>product 3</Link>
    </h3>
    <h3>
    <Link href={`/product/${productId}`}>product {productId}</Link>
</h3>
    </>

    )
}