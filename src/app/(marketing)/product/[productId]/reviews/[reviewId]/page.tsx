import {notFound ,redirect} from 'next/navigation';

export default async function ProductReview({
  params,
}: {
  params:{
    productId: string;
    reviewId:string;
  };
}) {
  const  {productId ,reviewId}  = await params
  if(parseInt(reviewId) > 1000){
   redirect("/product")
  }
  return <h1>review {reviewId} about Product {productId} </h1>;
}
