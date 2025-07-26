import React from "react";

export default function NameCard({ worker }) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-4 space-x-4">
      <img
        src={worker.image}
        alt={worker.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-lg">{worker.name}</div>
        <div className="text-gray-500 text-sm">Age: {worker.age}</div>
        <div className="text-gray-500 text-sm">{worker.email}</div>
      </div>
    </div>
  );
}
