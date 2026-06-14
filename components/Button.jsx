export default function Button({
  nameButton,
  backgroundColor = "#5E7A4E",
  color = "white",
}) {
  return (
    <button
      className={`mt-10  h-14  p-3  rounded-2xl  border  border-[#89A87A]  text-[#5E7A4E]  hover:bg-[#EEF2EB]  transition`}
      type="submit"
      style={{
        backgroundColor: backgroundColor,
        border: "none",
        color: color,
      }}
    >
      {nameButton}
    </button>
  );
}
