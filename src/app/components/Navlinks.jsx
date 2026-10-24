"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { getCategories } from "@/lib/api";

const NavlinksSkeleton = () => {
  return (
    <nav
      className="w-full border-t border-gray-100 bg-[#f9fbf9]"
      aria-label="ক্যাটাগরি লোড হচ্ছে"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex min-h-[58px] items-center justify-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex h-[38px] shrink-0 items-center gap-2 rounded-full bg-gray-200/70 px-4 animate-pulse"
            >
              <span className="h-4 w-4 rounded-full bg-gray-300" />
              <span
                className={`h-3 rounded-full bg-gray-300 ${
                  item % 2 === 0 ? "w-14" : "w-20"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavlinksContent = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        const data = await getCategories();

        if (isMounted) {
          setCategories(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <NavlinksSkeleton />;
  }

  return (
    <nav className="w-full border-t border-gray-100 bg-[#f9fbf9]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex min-h-[58px] items-center justify-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;

            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={category.id}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200 sm:px-4 ${
                  isActive
                    ? "bg-[#05893E] text-white shadow-sm"
                    : "text-[#26332b] hover:bg-green-100 hover:text-[#05893E]"
                }`}
              >
                <span className="text-base" aria-hidden="true">
                  {category.icon}
                </span>

                <span className="whitespace-nowrap">
                  {category.nameBn}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const Navlinks = () => {
  return (
    <Suspense fallback={<NavlinksSkeleton />}>
      <NavlinksContent />
    </Suspense>
  );
};

export default Navlinks;
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { getCategories } from "@/lib/api";

// const Navlinks = () => {
//   const pathname = usePathname();
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const data = await getCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error("Failed to load categories:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCategories();
//   }, []);

//   return (
//     <nav className="w-full border-t border-gray-100 bg-[#f9fbf9]">
//       <div className="mx-auto max-w-7xl px-3 sm:px-6">
//         <div className="flex min-h-[58px] items-center justify-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
//           {loading ? (
//             <div
//               className="flex items-center gap-2 text-sm text-[#05893E]"
//               role="status"
//               aria-label="ক্যাটাগরি লোড হচ্ছে"
//             >
//               <span className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-[#05893E]" />
//               <span>ক্যাটাগরি লোড হচ্ছে...</span>
//             </div>
//           ) : (
//           categories.map((category) => {
//             const href = `/category/${category.slug}`;

//             const isActive =
//               pathname === href || pathname.startsWith(`${href}/`);

//             return (
//               <Link
//                 key={category.id}
//                 href={href}
//                 aria-current={isActive ? "page" : undefined}
//                   className={`flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200 sm:px-4 ${
//                     isActive
//                       ? "bg-[#05893E] text-white shadow-sm"
//                       : "text-[#26332b] hover:bg-green-100 hover:text-[#05893E]"
//                   }`}
//                 >
//                   <span className="text-base" aria-hidden="true">
//                     {category.icon}
//                   </span>

//                   <span className="whitespace-nowrap">{category.nameBn}</span>
//                 </Link>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navlinks;
