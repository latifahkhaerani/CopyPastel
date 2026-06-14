import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router";
import loader from "../src/assets/loader.svg";
import Button from "../components/Button";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  // loading
  const [loading, setLoading] = useState(false);

  async function getDetail() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.p2.gc01aio.foxhub.space/apis/pub/products/products/${id}`,
      );

      // console.log(data.data);
      setDetail(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:pt-20 py-10">
          {loading ? (
            <div className="flex justify-center py-30 min-h-screen">
              <img src={loader} alt="loading image" className="px-35 " />
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 items-start m-12">
              {/* Product Image */}
              <div className="bg-[#F5F1E8] rounded-4xl p-8">
                <img
                  src={detail.imgUrl}
                  alt={detail.name}
                  className="w-full max-h-200 object-contain rounded-3xl"
                />
              </div>

              {/* Product Info */}
              <div className="bg-white rounded-4xl p-8 shadow-sm ">
                {/* badges */}
                <div className="flex gap-3 flex-wrap">
                  <span
                    className="
          px-4 py-2
          rounded-full
          bg-[#FFDDE6]
          text-[#B75E74]
          text-sm
        "
                  >
                    Stock {detail.stock}
                  </span>

                  <span
                    className="
          px-4 py-2
          rounded-full
          bg-[#EEF2EB]
          text-[#5E7A4E]
          text-sm
        "
                  >
                    {detail?.category?.name}
                  </span>
                </div>

                {/* title */}
                <h1
                  className="
        mt-6
        text-5xl
        font-serif
        text-gray-800
        leading-tight
      "
                >
                  {detail.name}
                </h1>

                {/* price */}
                <p
                  className="
        mt-5
        text-4xl
        font-semibold
        text-[#EA8FA5]
      "
                >
                  Rp {detail.price?.toLocaleString("id-ID")}
                </p>

                {/* description */}
                <h3 className="text-sm my-8 text-gray-400 mb-5">Description</h3>
                <div className="p-5 rounded-2xl bg-[#F8F7F4]">
                  {/* isi */}
                  <p className="text-gray-700 font-medium mt-1">
                    {detail.description}
                  </p>
                </div>

                {/* owner */}
                <div className="mt-5 rounded-2xl">
                  <p className="text-sm text-gray-400">
                    Product Owner: {detail?.author?.username}{" "}
                  </p>
                </div>

                {/* button */}
                <Link to="/">
                  <Button nameButton="Back to home" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
