"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const imageUrl = product.images?.[0] || "/placeholder.png";

  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm">
      {/* IMAGE */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-semibold">{product.title}</h3>

        <p className="font-bold">${product.price}</p>

        {/* ACTIONS */}
        <div className="mt-3 flex gap-2">
          {/* 👇 INI TARO DI SINI */}
          <Link
            href={`/products/${product.id}`}
            className="flex-1 rounded-xl border px-3 py-2 text-center text-sm font-medium transition hover:bg-gray-50"
          >
            View Details
          </Link>

          <button className="flex-1 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
