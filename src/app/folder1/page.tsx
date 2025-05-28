import Link from "next/link";

export default function F1(){
    return (
        <>
            <h1>F1 page</h1>
            <Link href="/folder1/folder2">Go to F2</Link>
            <Link href="/folder3">Go to F3</Link>
        </>
    )
}