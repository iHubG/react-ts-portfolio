import Profile from "@/assets/images/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import SocialButton from "@/components/home/SocialButton";
import About from "@/components/home/About"
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";

const Home = () => {
  const socialLinks = [
    {
      href: "https://github.com/iHubG",
      label: "GitHub",
      Icon: FaGithub,
      color: "text-gray-300",
    },
    {
      href: "https://www.linkedin.com/in/ian-macalinao",
      label: "LinkedIn",
      Icon: FaLinkedin,
      color: "text-blue-400",
    },
    {
      href: "mailto:ianmacalinaojob@gmail.com",
      label: "Email",
      Icon: MdEmail,
      color: "text-purple-400",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-2 px-0 lg:px-5 lg:py-2">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5 lg:mt-10">
        {/* Profile */}
        <div className="flex rounded-xl">
          <img
            src={Profile}
            alt="Profile"
            className="rounded-xl w-40 h-40 lg:w-50 lg:h-50 dark:outline dark:outline-white"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <h1 className="text-black text-xl sm:text-2xl font-semibold flex items-center gap-2 sm:gap-3 dark:text-white">
            Ian Macalinao
            <FaGraduationCap size={16} className="text-blue-400" />
          </h1>

          <p className="text-sm sm:text-base text-gray-800 font-medium mb-2 sm:mb-3 leading-relaxed dark:text-white">
            Aspiring Full-Stack Web Developer
          </p>

          <div className="flex items-center gap-2 text-gray-800 dark:text-white">
            <FaLocationDot size={14} className="text-emerald-400" />
            <span className="text-xs sm:text-sm">
              Cauayan City, Isabela, Philippines
            </span>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 w-full">
            {socialLinks.map((link) => (
              <SocialButton key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>

      <About />
      <FeaturedProjects />
      <TechStack />
    </section>
  );
};

export default Home;
