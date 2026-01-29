export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xl font-extrabold tracking-tight">RevoShop</p>
          <p className="text-sm text-gray-600">
            Where online feels like offline — without the hustle of queueing
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
        >
          Cart (0)
        </button>
      </div>
    </header>
  );
}
