import Details from "./details";

export default async function Listing({ params }) {
  const { slug } = await params;

  if (!slug) {
    return <div className="py-20 text-center">Listing not found</div>;
  }
  //I will generate static data which I will later be dynamically passing into the component,
  return (
    <>
      <Details slug={slug} />
    </>
  );
}
