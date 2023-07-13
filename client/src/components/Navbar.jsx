import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <nav className="text-white  mx-1 w-full h-screen flex flex-col items-center justify-center space-y-12 ">
      <Link to={"/newProduct"}>
        <p className="uppercase  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-500 ease-in-out ">
          Yeni Ürün Ekle
        </p>
      </Link>

      <div className="w-full px-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            placeholder="Ürün ID..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <Link to={`/products/${search}`}>
            <button
              onClick={() => setSearch("")}
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all ease-in-out duration-500"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
      <Link to={"/"}>
        <p className="uppercase  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-500 ease-in-out ">
          Home
        </p>
      </Link>

      {/* <div className="w-11/12 flex items-center justify-center sm:space-x-1">
        <input
          type="text"
          value={search}
          placeholder="Ürün ID..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 px-4 py-2  transition-all ease-in-out  rounded-sm duration-300 focus:outline-none focus:border-b border-b-white h-8  "
        />
        <Link to={`/products/${search}`}>
          <button
            onClick={() => setSearch("")}
            className="rounded-md h-8 outline-none mx-1 bg-slate-500  hover:bg-slate-600 px-1 duration-500 ease-in-out cursor-pointer "
          >
            Search
          </button>
        </Link>
        <Link to={"/"}>
          <p className="font-bold text-4xl px-3 py-2 ">Home</p>
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
