import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const delay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 15000);
    });
  };

  const res = await delay();

  return NextResponse.json({
    rating: 4,
    reviewCount: 512,
  });
}
