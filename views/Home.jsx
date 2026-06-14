import { useState } from "react";
import Card from "../components/Card";
import CardHome from "../components/CardHome";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router";
import loader from "../src/assets/loader.svg";
import sortlogo from "../src/assets/sort.png";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  // search
  const [search, setSearch] = useState("");
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  // filter by category
  const [selectedCategory, setSelectedCategory] = useState();
  //sort
  const [sort, setSort] = useState("DESC");
  // loading
  const [loading, setLoading] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.p2.gc01aio.foxhub.space/apis/pub/products/products`,
        // fitur
        {
          params: {
            q: search,
            page: currentPage,
            i: selectedCategory,
            sort: sort,
          },
        },
      );
      // console.log(data, "cari");
      // console.log(selectedCategory, "select dalam fetch prod");

      setProduct(data.data);
      setTotalPage(data.meta.totalPages);

      if (selectedCategory == data.data.categoryId) {
        // console.log(data.data.categoryId, "hasil if");
        setProduct(data.data);
      }
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategory() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.p2.gc01aio.foxhub.space/apis/pub/products/categories`,
      );

      // console.log(data.data, "cateogry");
      setCategory(data.data);
    } catch (error) {
      console.log(error.res);
    } finally {
      setLoading(false);
    }
  }

  // looping tombol pages untuk munculkan angka sesuai berapa banyak total halaman
  function generatePages() {
    const arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
    return arr;
  }

  // tombol previous page
  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // tombol previous page
  function nextPage() {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  // click logo to reset filters
  function resetFilters() {
    setCurrentPage(1);
    setSort("DESC");
    setSelectedCategory();
    setSearch("");
  }

  // console.log(generatePages(), "iniii");
  // console.log(totalPage, "toal");
  // Fetch products pertama kali saat halaman load
  useEffect(() => {
    fetchProduct();
  }, [currentPage, selectedCategory, sort]);

  // Fetch categories pertama kali saat halaman load
  useEffect(() => {
    fetchCategory();
  }, []);

  // {console.log(selectedCategory, "ctgr apa yg di select?")}

  // console.log(sort,'sortt nie')

  return (
    <>
      <Navbar
        search={search}
        fetchProduct={fetchProduct}
        setSearch={setSearch}
        // click logo to reset filters
        resetFilters={resetFilters}
      />

      {/* <Hero /> */}
      {/* pages */}
      <section className="bg-white py-10 max-w-7xl pt-30 mx-auto w-full px-30">
        {loading ? (
          <div className="flex justify-center min-h-screen">
            <img src={loader} alt="loading image" className="h-fit pt-40" />
          </div>
        ) : (
          <div>
            {/* Category Section */}
            <h1 className=" text-5xl font-medium tracking-tight text-gray-800 mb-6 ">
              CATEGORY
            </h1>

            <div className="relative">
              {/* Fade kiri */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-linear-to-r from-[#FCFAF7] to-transparent" />

              {/* Fade kanan */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-linear-to-l from-[#FCFAF7] to-transparent" />

              <div
                className="pt-2  flex gap-6 overflow-x-auto pb-3 scrollbar-hide
        "
              >
                {category.map((category, indexBgColor) => {
                  return (
                    <>
                      <Card
                        key={category.id}
                        category={category}
                        i={indexBgColor}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        // supaya pas di page 3 lalu select category lagi, halaman di reset ke page 1 biar datanya muncul
                        setCurrentPage={setCurrentPage}
                      />
                    </>
                  );
                })}
              </div>
            </div>
            {/* Products Section */}
            <div className="mt-14">
              <div className="flex items-center justify-between mb-6">
                <h1
                  className="
          text-5xl 
          font-medium
          tracking-tight
          text-gray-800
          mb-6
        "
                >
                  PRODUCT
                </h1>
                {/* sort */}
                <button
                  onClick={() => {
                    setSort(sort === "ASC" ? "DESC" : "ASC");
                  }}
                  className="cursor-pointer"
                >
                  <img src={sortlogo} className="w-auto h-10" alt="" />
                </button>
              </div>

              <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {product.length > 0 ? (
                  product.map((product) => (
                    <Link key={product.id} to={`/detail/${product.id}`}>
                      <CardHome product={product} />
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-20">
                    <div className="text-5xl mb-4">🔍</div>

                    <h2 className="text-xl font-semibold text-[#6B6375]">
                      Product Not Found
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      Try another category or search keyword.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* pagination */}
            <div className="flex justify-center my-20">
              <div className="join overflow-hidden rounded-2xl">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="join-item btn border-[#E5DDD7] bg-[#F5F1E8] text-stone-700 hover:bg-[#ECE7E2] disabled:cursor-not-allowed  disabled:opacity-50"
                >
                  ← Prev
                </button>

                {/* angka */}
                {generatePages().map((item) => {
                  return (
                    <>
                      <input
                        key={item}
                        // onClick={()=>{console.log(item,'onklik')}}
                        onClick={() => {
                          setCurrentPage(item);
                        }}
                        className="
          join-item
          btn btn-square border-[#E5DDD7] bg-white text-stone-700 checked:bg-[#F4ECEE] checked:text-stone-800 checked:border-[#D8B9C1] hover:bg-[#F5F1E8]"
                        type="radio"
                        name="options"
                        aria-label={item}
                        checked={currentPage == item}
                      />
                      ;
                    </>
                  );
                })}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPage}
                  className="
        join-item
        btn
        border-[#E5DDD7]
        bg-[#F5F1E8]
        text-stone-700
        hover:bg-[#ECE7E2]
        disabled:cursor-not-allowed  disabled:opacity-50
      "
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
