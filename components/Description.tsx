export default async function Description() {
  const productRequest = await fetch(
    `${process.env.BIGCOMMERCE_API_URL}v3/catalog/products/77`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Auth-Token": process.env.BIGCOMMERCE_API_TOKEN,
      } as HeadersInit,
      next: {
        revalidate: 30,
      },
    }
  );
  const productData = await productRequest.json();
  const description = productData.data.description;

  return (
    <div
      className="prose prose-sm mt-4 text-gray-500"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
