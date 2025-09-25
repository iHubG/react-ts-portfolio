import {
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Laptop, Server, Wrench } from "lucide-react"; // category icons

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Laptop size={20} className="text-blue-600 dark:text-blue-400" />,
      techs: [
        {
          id: 1,
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" size={28} />,
        },
        {
          id: 2,
          name: "Vue.js",
          icon: <SiVuedotjs className="text-green-500" size={28} />,
        },
        {
          id: 3,
          name: "React",
          icon: <SiReact className="text-sky-500" size={28} />,
        },
        {
          id: 4,
          name: "Angular",
          icon: <SiAngular className="text-red-600" size={28} />,
        },
        {
          id: 5,
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500" size={28} />,
        },
        {
          id: 6,
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600" size={28} />,
        },
        {
          id: 7,
          name: "HTML5",
          icon: <SiHtml5 className="text-orange-600" size={28} />,
        },
        {
          id: 8,
          name: "CSS3",
          icon: <SiCss3 className="text-blue-500" size={28} />,
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={20} className="text-green-600 dark:text-green-400" />,
      techs: [
        {
          id: 9,
          name: "Java",
          icon: <FaJava className="text-red-500" size={28} />,
        },
        {
          id: 10,
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-600" size={28} />,
        },
        {
          id: 11,
          name: "PHP",
          icon: <SiPhp className="text-indigo-500" size={28} />,
        },
        {
          id: 12,
          name: "Laravel",
          icon: <SiLaravel className="text-red-600" size={28} />,
        },
        {
          id: 13,
          name: "MySQL",
          icon: <SiMysql className="text-orange-500" size={28} />,
        },
        {
          id: 14,
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500" size={28} />,
        },
      ],
    },
    {
      title: "Tools",
      icon: (
        <Wrench size={20} className="text-purple-600 dark:text-purple-400" />
      ),
      techs: [
        {
          id: 15,
          name: "Git",
          icon: <SiGit className="text-orange-600" size={28} />,
        },
        {
          id: 16,
          name: "GitHub",
          icon: (
            <SiGithub className="text-gray-900 dark:text-white" size={28} />
          ),
        },
        {
          id: 17,
          name: "VS Code",
          icon: <BiLogoVisualStudio className="text-blue-600" size={28} />,
        },
        {
          id: 18,
          name: "Postman",
          icon: <SiPostman className="text-orange-500" size={28} />,
        },
        {
          id: 19,
          name: "Figma",
          icon: <SiFigma className="text-pink-500" size={28} />,
        },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-0 py-5 lg:py-10 lg:px-5 ">
        <title>Ian Macalinao - Skills</title>
      <h2 className="text-2xl text-center font-semibold text-gray-900 dark:text-white mb-10">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-12">
        {categories.map((category) => (
          <div key={category.title}>
            {/* Category Heading with Icon */}
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {category.icon}
              {category.title}
            </h3>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {category.techs.map((tech) => (
                <div
                  key={tech.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg 
                             bg-gray-50 dark:bg-gray-800 
                             border border-gray-200 dark:border-gray-700 
                             hover:shadow-md dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                             transition"
                >
                  {tech.icon}
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
