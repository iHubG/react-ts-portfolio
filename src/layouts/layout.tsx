import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AiChat from "@/components/ai/AiChat"; 
import { Analytics } from "@vercel/analytics/react"

function Layout() {
  return (
    <div className="dark:bg-[#0f172a] pt-5 lg:pt-10 h-full">
      <ScrollToTop /> 
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>

      <Footer />

      <AiChat />
      <Analytics />
    </div>
  );
}

export default Layout;
