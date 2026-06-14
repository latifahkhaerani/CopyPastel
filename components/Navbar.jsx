import { useState } from "react";
import logo from "../public/logo.png";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Navbar({
  fetchProduct,
  search,
  setSearch,
  resetFilters,
}) {
  // handler search
  function handleSearch(e) {
    e.preventDefault();
    fetchProduct();
  }

  useEffect(() => {
    fetchProduct;
  }, []);
  return (
    <>
      {/* navbar */}
      <nav className="fixed z-10 w-full h-20 px-8 lg:px-12 flex items-center justify-between  bg-[#FCFAF7] border-b  border-[#F2ECE7]">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => {
              resetFilters();
            }}
          >
            <img
              src={logo}
              alt="Copy Pastel"
              className="h-20 w-auto object-contain"
            />
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center w-full ml-15 justify-around">
          {/* Search */}
          {/* on submit jalan ketika di enter */}
          <form onSubmit={handleSearch} className="relative flex-1">
            {/* input jalan setiap kali user ketik satu huruf */}
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              type="text"
              placeholder="Search products..."
              className=" text-gray-700
            w-full h-11 pl-8 pr-4 rounded-full bg-white border border-[#E8E8E8] outline-none focus:border-[#EA8FA5]"
            />

            <svg
              className=" absolute right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </form>
        </div>
      </nav>
    </>
  );
}
