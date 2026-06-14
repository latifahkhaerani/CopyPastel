import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function BaseLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />

        <footer
          className="py-8
  bg-[#F8F7F4]
  text-center
  text-gray-500
  text-sm
  border-t
  border-[#ECE7E2]
"
        >
          © 2026
        </footer>
      </div>
    </>
  );
}
