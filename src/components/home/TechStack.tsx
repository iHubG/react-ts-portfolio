import { Link } from "react-router-dom";
import { SiReact, SiTypescript, SiTailwindcss, SiLaravel, SiMysql, SiVuedotjs, SiFirebase, SiFigma } from "react-icons/si";
import { ArrowRight } from "lucide-react";

const TechStack = () => {
  const techs = [
    { id: 1, name: "React", icon: <SiReact className="text-sky-500" size={28} /> },
    { id: 2, name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={28} /> },
    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={28} /> },
    { id: 4, name: "Laravel", icon: <SiLaravel className="text-red-600" size={28} /> },
    { id: 5, name: "MySQL", icon: <SiMysql className="text-orange-500" size={28} /> },
    { id: 6, name: "Vue.js", icon: <SiVuedotjs className="text-green-500" size={28} /> },
    { id: 7, name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={28} /> },
    { id: 8, name: "Figma", icon: <SiFigma className="text-pink-500" size={28} /> },
  ];

  return (
    <section className="grid grid-cols-6 gap-10 max-w-6xl mx-auto mt-20 lg:mt-20">
      <div className="rounded-xl px-0 py-5 lg:py-10 lg:px-5 col-span-6">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-center font-semibold text-gray-900 dark:text-white mb-5">
            Tech Stack
          </h2>

          {/* Tech grid preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
            {techs.slice(0, 6).map((tech) => ( // 👉 only show 6 here
              <div
                key={tech.id}
                className="flex flex-col items-center gap-2 p-4 rounded-lg 
                           bg-gray-50 dark:bg-gray-800 
                           border border-gray-200 dark:border-gray-700 
                           hover:shadow-md dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                           transition"
              >
                {tech.icon}
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>

          {/* View All button */}
          <div className="mt-4 text-center">
            <Link
              to="/skills"
              className="inline-block px-4 py-2 text-sm font-medium rounded-lg
                         text-blue-600 hover:bg-blue-100 
                         dark:text-blue-400 dark:hover:bg-gray-800 transition"
            >
              View All Skills
              <ArrowRight size={16} className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
