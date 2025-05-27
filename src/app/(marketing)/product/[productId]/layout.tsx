function getRandomInt(count:number){
  return Math.floor(Math.random() * count);
}




export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const random = getRandomInt(2);
  if(random === 1) {
  throw new Error("Error loading Product ");
  }
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
}