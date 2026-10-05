
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { usetheme } from "../context/ThemeContext";
import Footer from "./Footer";

const Layout = () => {
  const { theme } = usetheme();
  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen flex flex-col bg-gray-900 text-white"
          : "min-h-screen flex flex-col bg-white text-black"
      }
    >
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
