import Link from "next/link";
export default function innerF2(){
    return (
        <>
        <h1>Inner F2 page</h1>
        <div>
            <Link href="/folder5">
            Go to F5
            </Link>
        </div>
        </>
    )
}