import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="text-sm p-5 text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-800 text-center">
      © {new Date().getFullYear()} Ian Macalinao. All rights reserved.
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 cursor-pointer ${
          isAtTop ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
