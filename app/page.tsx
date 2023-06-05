import Image from "next/image";
import { Suspense, useState } from "react";
import Price from "@/components/Price";
import Description from "@/components/Description";
import Reviews from "@/components/Reviews";
import ProductTitle from "@/components/ProductTitle";
import Images from "@/components/Images";

export const runtime = "edge";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <Suspense
                  fallback={
                    <div className="w-1/3 h-[28px] animate-pulse bg-gray-500 rounded"></div>
                  }
                >
                  {/* @ts-expect-error Server Component */}
                  <ProductTitle />
                </Suspense>
                <div className="text-xl font-medium text-gray-900">
                  <Suspense
                    fallback={
                      <div className="w-1/3 h-[28px] animate-pulse bg-gray-500 rounded"></div>
                    }
                  >
                    {/* @ts-expect-error Server Component */}
                    <Price />
                  </Suspense>
                </div>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <Suspense
                  fallback={
                    <div className="w-1/2 h-[20px] animate-pulse bg-gray-500 rounded"></div>
                  }
                >
                  {/* @ts-expect-error Server Component */}
                  <Reviews />
                </Suspense>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                    <div className="lg:col-span-2 lg:row-span-2 rounded-lg h-[696px] animate-pulse bg-gray-500"></div>
                    <div className="rounded-lg h-[332px] animate-pulse bg-gray-500"></div>
                    <div className="rounded-lg h-[332px] animate-pulse bg-gray-500"></div>
                  </div>
                }
              >
                {/* @ts-expect-error Server Component */}
                <Images />
              </Suspense>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <Suspense
                  fallback={
                    <div className="w-full h-[28px] animate-pulse bg-gray-500 rounded"></div>
                  }
                >
                  {/* @ts-expect-error Server Component */}
                  <Description />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
