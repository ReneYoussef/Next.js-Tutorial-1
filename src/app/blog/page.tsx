import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
         absolute: "Blog",
    }
}//static metadata for the about page

export default async function blog(){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("blog page loaded");
        }, 2000);
    })
    return <h1>blog page</h1>
}