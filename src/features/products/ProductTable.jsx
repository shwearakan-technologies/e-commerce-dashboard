import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  PlusCircle,
  SquarePen,
  Trash,
} from "lucide-react";
import { useState } from "react";
import products from "../../data/products.js";
import vendors from "@/data/vendors.js";
import users from "@/data/users.js";

// 1. Define columns
const columns = [
  {
    header: "Product Name",
    accessorKey: "name",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <img
          src="/logo/logo.png"
          alt={info.getValue()}
          className="h-10 w-10 rounded object-cover"
        />
        <span>{info.getValue()}</span>
      </div>
    ),
  },
  {
    header: "Vendor",
    accessorKey: "vendor_id",
    cell: (info) => {
      const vendor = vendors.find(
        (vendor) => vendor.vendor_id === info.getValue()
      );
      return vendor?.business_name;
    },
  },
  {
    header: "Created by",
    accessorKey: "created_by",
    cell: (info) => {
      const user = users.find((user) => user.user_id === info.getValue());
      return user?.first_name + " " + user?.last_name;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => (
      <span className="rounded-full bg-green-700 px-2 py-1 text-xs text-gray-200">
        {info.getValue()}
      </span>
    ),
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: (info) => `$${info.getValue()}`,
  },
  {
    header: "Sale Price",
    accessorKey: "sale_price",
    cell: (info) => `$${info.getValue() ?? 0}`,
  },

  {
    header: "Published",
    accessorKey: "is_published",
    cell: (info) => (
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={info.getValue()}
        />
        <div className="peer h-4 w-8 rounded-full bg-red-700 transition-colors duration-300 peer-checked:bg-green-700">
          <div
            className={`absolute left-[2px] top-[2px] h-3 w-3 rounded-full bg-gray-200 transition-transform duration-300 ${info.getValue() ? "translate-x-4" : "translate-x-0"}`}
          ></div>
        </div>
      </label>
    ),
  },

  {
    header: "Actions",
    accessorKey: "",
    cell: () => (
      <div className="flex gap-3 text-gray-400">
        <PlusCircle className="w-4" />
        <SquarePen className="w-4" />
        <Trash className="w-4" />
      </div>
    ),
  },
];

// 2. Main component
// eslint-disable-next-line react/prop-types
export default function ProductTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: products,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="rounded-lg bg-base-100 p-4 shadow">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-400/20">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th>
                  <input type="checkbox" />
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-sm font-medium uppercase text-gray-500"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-400/20">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            className="rounded border border-gray-400/20 px-3 py-1 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="w-5" />
          </button>
          <button
            className="rounded border border-gray-400/20 px-3 py-1 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="w-5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className="rounded border border-gray-400/20 px-3 py-1 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="w-5" />
          </button>
          <button
            className="rounded border border-gray-400/20 px-3 py-1 disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
