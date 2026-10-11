import Link from "next/link";
import { getCategories } from "@/lib/api";

const Navlinks = async () => {
  const categories = await getCategories();

  return (
    <nav className="w-full border-t border-gray-100 bg-[#f9fbf9]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto py-3 sm:justify-center sm:gap-3 md:gap-2 lg:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category?.slug}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#26332b] transition-colors duration-200 hover:bg-green-100 hover:text-[#05893E] sm:px-4"
            >
              <span className="text-base" aria-hidden="true">
                {category?.icon}
              </span>

              <span className="whitespace-nowrap">{category?.nameBn}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navlinks;
