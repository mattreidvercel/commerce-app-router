import Image from "next/image";

export default async function Images() {
  const productRequest = await fetch(
    `${process.env.BIGCOMMERCE_API_URL}v3/catalog/products/77/images`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Auth-Token": process.env.BIGCOMMERCE_API_TOKEN,
      } as HeadersInit,
      cache: "no-store",
    }
  );
  const productData = await productRequest.json();
  let images = productData.data;

  images.sort((a: any, b: any) =>
    a.sort_order > b.sort_order ? 1 : b.sort_order > a.sort_order ? -1 : 0
  );

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <h2 className="sr-only">Images</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
        {images.map((image: any) => (
          <Image
            src={image["url_zoom"]}
            key={image.id}
            width={1000}
            height={1000}
            alt={`Image ${image.description}`}
            priority={image["sort_order"] == 0 ? true : false}
            className={classNames(
              image["sort_order"] == 0
                ? "lg:col-span-2 lg:row-span-2"
                : "hidden lg:block",
              "rounded-lg"
            )}
          />
        ))}
      </div>
    </>
  );
}
