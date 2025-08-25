"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border rounded-md px-3 py-2 w-40 md:w-64 bg-white shadow-sm transition-all duration-300 focus-within:w-64">
      <Search className="w-4 h-4 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}