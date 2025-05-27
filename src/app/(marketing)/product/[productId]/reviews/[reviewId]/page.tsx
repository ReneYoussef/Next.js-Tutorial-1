import {notFound} from 'next/navigation';

// function getRandomInt(count:number){
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params:
   Promise<{productId: string;
    reviewId:string;}>
  
}) {

  // const random = getRandomInt(2);
  // if(random === 1) {
  // throw new Error("Error loading Product Review");
  // }
  const  {productId ,reviewId}  = await params
  if(parseInt(reviewId) > 1000){
  //  redirect("/product")
    notFound(); // This will trigger a 404 page
}
  return <h1>review {reviewId} about Product {productId} </h1>;
}
