export default function CardHome({ product }) {
  return (
    <>
      <div
        key={product.id}
        className=" transition
            duration-500 hover:scale-105 shadow-lg rounded-2xl p-5"
      >
        <a className="overflow-hidden rounded-3xl bg-[#F8F4EF]">
          <img
            src={product.imgUrl}
            alt=""
            className="
            aspect-4/5
            
            w-full
            object-cover
            
            
          "
          />
        </a>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>

          <p className="mt-1 text-[#EA8FA5] font-semibold">Rp{product.price?.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </>
  );
}
