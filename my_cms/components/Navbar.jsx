import { Link } from "react-router";

export default function Navbar() {
  const role = localStorage.getItem("role");
  return (
    <>
      <header
        className="
      navbar
      sticky-top
      bg-white
      border-bottom
      px-4
      "
        style={{
          height: "72px",
          zIndex: 999,
        }}
      >
        <div className="d-flex ml-3 align-items-center">
          <img src="../src/assets/IDEA_logo.svg" width={120} alt="IDEA" />
        </div>

        <div className="d-flex align-items-center gap-3">
          {/* admin panel */}

          <div className="">
            <h6 className="mb-0 fw-bold text-dark text-right">CMS </h6>

            <small className="text-muted">{role} Dashboard</small>
          </div>
        </div>
      </header>
    </>
  );
}
