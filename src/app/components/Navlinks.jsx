import Link from "next/link";

const Navlinks = async () => {
  const resData = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const categories = await resData.json();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-center gap-7 border-t border-gray-100 bg-[#f9fbf9] py-2 text-sm font-semibold text-[#26332b]">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div className="flex items-center gap-2 justify-center">
              <p>{category?.icon}</p>
              <p>{category?.nameBn}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navlinks;

