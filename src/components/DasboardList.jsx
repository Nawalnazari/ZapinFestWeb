import React from "react";

export default function DashboardList({ workers }) {
  const [page, setPage] = React.useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(workers.length / pageSize);

  const paginatedWorkers = workers.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Worker List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-medium">Name</th>
              <th className="py-2 px-4 border-b font-medium">Position</th>
              <th className="py-2 px-4 border-b font-medium">Status</th>
              <th className="py-2 px-4 border-b font-medium">Department</th>
            </tr>
          </thead>
          <tbody>
            {paginatedWorkers.map((worker, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{worker.name}</td>
                <td className="py-2 px-4 border-b">{worker.position}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      worker.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {worker.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">{worker.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 rounded text-sm ${
                page === idx + 1
                  ? "bg-violet-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}