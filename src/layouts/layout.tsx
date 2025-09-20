import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const layout = () => {
  return (
    <div className="dark:bg-[#0f172a] py-5 lg:py-10 h-full lg:h-screen">
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default layout;
