import ProductTable from "@/features/products/ProductTable";

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Product Inventory</h1>
      <ProductTable />
    </div>
  );
}
