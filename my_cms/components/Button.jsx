export default function Button({
  nameButton,
  backgroundColor = "#1E293B",
  color = "white",
}) {
  return (
    <button
      className={`btn rounded-pill w-100 p-2 text-decoration-none`}
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
