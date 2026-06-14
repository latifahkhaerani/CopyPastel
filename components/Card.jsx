export default function Card({
  category,
  i,
  setSelectedCategory,
  selectedCategory,
  setCurrentPage,
}) {
  const bgColors = [
    "bg-[#F4ECEE]", // dusty pink
    "bg-[#F5F1E8]", // muted cream
    "bg-[#EEF2EB]", // muted sage
    "bg-[#F2ECE8]", // muted beige
    "bg-[#ECE7E2]", // stone
  ];
  return (
    <>
      <button
        onClick={() => {
          if (selectedCategory === category.name) {
            setSelectedCategory("");
          } else {
            setSelectedCategory(category.name);
          }
          // supaya pas di page 3 lalu select category lagi, halaman di reset ke page 1 biar datanya muncul
          setCurrentPage(1);
        }}
        className={`
     px-5 w-max h-20 shrink-0 rounded-3xl ${bgColors[i % bgColors.length]} border border-[#F3EEE8] flex flex-col justify-center items-center transition-all duration-200 cursor-pointer
          ${
            selectedCategory === category.name
              ? "shadow-lg translate-y-0.5 ring-2 ring-[#C8D3C2] border-[#D8B9C1] scale-[0.98] font-semibold"
              : "shadow-md hover:-translate-y-1"
          }
        `}
      >
        <p className="text-xl font-medium text-[#6B6375]">{category.name}</p>

        <p className="text-sm text-gray-400 mt-2">Browse Collection</p>
      </button>
    </>
  );
}
