"use client";  //useRouter only works in a client component

import {useRouter} from "next/navigation";

export default function OrderProduxt() {
const router = useRouter();
const handleClick=()=>{
console.log("order placed");
router.push("/");
}



  return (
   <>
   <h1>order product</h1>
   <button onClick={handleClick} >  place order</button>
   </>
  );
}