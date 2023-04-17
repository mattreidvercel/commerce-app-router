export default async function Price() {
  const priceRequest = await fetch(
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
  const priceData = await priceRequest.json();
  const price = priceData.data.price;

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return <>{formatter.format(price)}</>;
}
