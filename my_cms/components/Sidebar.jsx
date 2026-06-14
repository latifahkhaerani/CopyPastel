import { NavLink, Link } from "react-router";
import { useNavigate } from "react-router";
// import axios from "axios";

export default function Sidebar() {
  let navigate = useNavigate();
  const username = localStorage.getItem("username");

  async function logout() {
    try {
      localStorage.clear();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav
      className="fixed top-18 inset-s-0 vh-100"
      style={{
        width: "200px",
        background: "#0F172A",
        borderRight: "1px solid #1E293B",
        zIndex: 1000,
      }}
    >
      <div className="p-4 border-bottom border-secondary">
        <div className="text-light flex align-middle">
          <span className="material-symbols-outlined me-2 text-secondary">
            person
          </span>
          <small className="text-secondary"> {username} </small>
        </div>
      </div>

      <div className="p-3">
        <p
          className="text-uppercase text-secondary small mb-3"
          style={{ letterSpacing: "1px" }}
        >
          Menu
        </p>

        <ul className="nav flex-column gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center rounded-3 px-3 py-2 text-decoration-none ${
                  isActive
                    ? "bg-secondary bg-opacity-25 text-white fw-semibold"
                    : "text-secondary fw-semibold"
                }`
              }
            >
              <span className="material-symbols-outlined me-2">
                shopping_bag
              </span>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center rounded-3 px-3 py-2 text-decoration-none ${
                  isActive
                    ? "bg-secondary bg-opacity-25 text-white fw-semibold"
                    : "text-secondary fw-semibold"
                }`
              }
            >
              <span className="material-symbols-outlined me-2">category</span>
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-staff"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center rounded-3 px-3 py-2 text-decoration-none ${
                  isActive
                    ? "bg-secondary bg-opacity-25 text-white fw-semibold"
                    : "text-secondary fw-semibold"
                }`
              }
            >
              <span className="material-symbols-outlined me-2">
                account_circle
              </span>
              Add User
            </NavLink>
          </li>
        </ul>

        <hr className="border-secondary my-4" />

        <p
          className="text-uppercase text-secondary small mb-3"
          style={{ letterSpacing: "1px" }}
        >
          Account
        </p>

        {/* <button
          onClick={logout}
          className="btn btn-outline-light w-100 mt-3 d-flex align-items-center justify-content-center text-decoration-none gap-2"
        >
          <span className="material-symbols-outlined ">logout</span>
          Logout
        </button> */}

        {!localStorage.getItem("access_token") ? (
          <>
            <Link to="/login" className="text-decoration-none">
              <div className="btn btn-outline-light w-100 mt-3 d-flex align-items-center justify-content-center gap-2 text-decoration-none underline-none">
                <span className="material-symbols-outlined">login</span> Login
              </div>
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="btn btn-outline-light w-100 mt-3 d-flex align-items-center justify-content-center text-decoration-none gap-2"
          >
            <span className="material-symbols-outlined ">logout</span>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
