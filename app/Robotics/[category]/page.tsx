import { roboticsProducts } from "@/data/roboticsProducts";

export default async function RoboticsCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = roboticsProducts.filter(
    (p) => p.category === category
  );

  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl font-semibold mb-6 capitalize">
        {category.replaceAll("-", " ")}
      </h1>

      {products.length === 0 ? (
        <p>No products in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="border border-white/10 rounded-xl p-4 bg-black/60">
              <div className="h-32 bg-white/5 rounded mb-3" />
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm opacity-70">₹{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}