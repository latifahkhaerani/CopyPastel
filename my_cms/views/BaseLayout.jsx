import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BaseLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar/>
        <Outlet />
      </div>
    </>
  );
}
