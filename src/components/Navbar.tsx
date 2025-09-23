import { NavLink } from "react-router-dom";
import ThemesToggle from "@/components/ThemesToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
];

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center py-2 px-5 lg:px-5 lg:py-2 rounded-full bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center lg:gap-6 text-gray-700 font-medium">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-sm lg:text-base py-1 px-3 lg:px-5 lg:py-1 rounded-full transition ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white font-semibold"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <ThemesToggle />
    </nav>
  );
};

export default Navbar;
