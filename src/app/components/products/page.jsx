import { getProducts } from '@/lib/api'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'চাল — আজকের দাম ও পরিবর্তন',
}

export default async function ProductsPage() {

  const products = await getProducts('chal')

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        হোম / চাল / <span className="text-gray-700">চাল</span>
      </nav>

      {/* হেডার কার্ড */}
      <section className="mb-6 flex flex-col items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-3xl">
            🍚
          </div>
          <div>
            <h1 className="text-2xl font-bold">চাল</h1>
            <p className="text-sm text-gray-500">
              ৮টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </section>

      {/* সর্ট বার */}
      <div className="mb-6 flex items-center justify-end gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
        <label className="text-sm text-gray-500">সাজান</label>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm outline-none focus:border-green-500">
          <option>ডিফল্ট</option>
          <option>দাম: কম থেকে বেশি</option>
          <option>দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="mb-4 text-sm text-gray-500">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </p>

     
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}