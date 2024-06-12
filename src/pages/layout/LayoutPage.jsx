import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./layout-page.scss";

export default function LayoutPage() {
  return (
    <div className="layout-page">
      <Navbar />
      <Outlet />
    </div>
  );
}
