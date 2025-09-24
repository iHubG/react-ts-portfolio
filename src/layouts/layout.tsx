import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const layout = () => {
  return (
    <div className="dark:bg-[#0f172a] pt-5 lg:pt-10 h-full">
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default layout;
