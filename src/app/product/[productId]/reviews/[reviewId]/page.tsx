export default async function ProductReview({
  params,
}: {
  params:{
    productId: string;
    reviewId:string;
  };
}) {
  const  {productId ,reviewId}  = await params
  return <h1>review {reviewId} about Product {productId} </h1>;
}
