"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/products" className="block">
          <p className="text-xl font-extrabold tracking-tight">RevoShop</p>
          <p className="text-sm text-gray-600">
            Where online feels like offline — without the hustle
          </p>
        </Link>

        <Link
          href="/cart"
          className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
        >
          Cart ({totalItems})
        </Link>
      </div>
    </header>
  );
}
