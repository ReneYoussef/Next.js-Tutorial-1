import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
         absolute: "Blog",
    }
}//static metadata for the about page

export default function blog(){
    return <h1>blog page</h1>
}