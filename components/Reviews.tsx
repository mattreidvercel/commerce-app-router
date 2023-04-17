import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default async function Reviews() {
  const urlBase = process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

  const reviewsRequest = await fetch(`${urlBase}/api/reviews?nonce=5`, {
    cache: "no-store",
  });
  const reviewsData = await reviewsRequest.json();

  return (
    <>
      <h2 className="sr-only">Reviews</h2>
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          {reviewsData.rating}
          <span className="sr-only"> out of 5 stars</span>
        </p>
        <div className="ml-1 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviewsData.rating > rating
                  ? "text-yellow-400"
                  : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
          ·
        </div>
        <div className="ml-4 flex">
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            See all {reviewsData.reviewCount} reviews
          </a>
        </div>
      </div>
    </>
  );
}
