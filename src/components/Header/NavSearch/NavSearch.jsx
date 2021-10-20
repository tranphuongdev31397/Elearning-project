import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
export default function NavSearch() {
  return (
    <form className="navbar__search  bg-gray-100 rounded-full py-2 px-6 w-100 gap-4 border-solid border-gray-900 border-2">
      <div className="flex flex-row flex-nowrap">
      <button type="submit" className="icon mr-2">
        <SearchIcon className="h-5 w-5 text-blue-500" />
      </button>
      <input type="text" className="border-none w-100 bg-gray-100 outline-none" placeholder="Search for anything..." />
      </div>
    </form>
  );
}
