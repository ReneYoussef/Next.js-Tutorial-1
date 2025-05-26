"use client";

import { usePathname } from "next/navigation"
import { use } from "react"
// notFound function don't take any props, it will automatically redirect to the not-found.tsx page
// if i need to show different messages based on the route parameters,we will relly on the use path name hook from next.js
export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2]; // Extract productId from the path
    const reviewId = pathname.split('/')[4]; // Extract reviewId from the path
 
return (
<div>
    <h2>Review {reviewId} Not found for Product {productId}</h2>
  
</div>
)
}