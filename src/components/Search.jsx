import React from "react";
import { SearchIcon } from "./Icons";

const Search = () => {
  return (
    <div>
      <form className="hidden sm:flex">
        <input className="dark:bg-background text-white h-[31px] py-2 px-4 border border-darkGrey outline-none md:w-80 lg:w-96 xl:w-[500px]" id="search" type="text" placeholder="Search" />
        <button className="w-16 dark:bg-darkGrey rounded-r-md" aria-label="Search videos and channels" type="submit">
          <SearchIcon className="h-6 w-full text-white/60 block" />
        </button>
      </form>
    </div>
  );
};

export default Search;
