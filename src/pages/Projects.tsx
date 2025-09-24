import ProjectCard from "@/components/ProjectCard";
import { type ProjectProps } from "@/types";
import StayFit from "@/assets/images/stayfit.png";
import ClothingEcommerce from "@/assets/images/clothing-ecommerace.png";
import Consultation from "@/assets/images/consultation.png";

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "StayFit",
      description:
        "A simple, AI-powered fitness web application that provides personalized workout recommendations through conversational AI using Google's Gemini API.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Firebase",
        "Gemini",
      ],
      image: StayFit,
      repo: "https://github.com/iHubG/stayfit",
      live: "https://stayfit-ai.vercel.app/",
    },
    {
      id: 2,
      title: "Clothing E-commerce",
      description:
        "A modern and responsive e-commerce website for clothing, featuring product listings and a shopping cart. Built from a free Figma template.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      image: ClothingEcommerce,
      repo: "https://github.com/iHubG/clothing-ecommerce",
      live: "https://clothing-ecommerce-theta.vercel.app/",
    },
    {
      id: 3,
      title: "Consultation Scheduling System",
      description:
        "A web-based platform that streamlines scheduling of consultations for students, faculty, and admins. Features include authentication, role-based control, and in-app notifications.",
      tech: ["Laravel", "React", "Tailwind CSS", "Shadcn UI", "MySQL"],
      image: Consultation,
      repo: "https://github.com/iHubG/consultation-scheduling-system-v3",
      live: "N/A",
    },
    {
      id: 4,
      title: "Furniture E-commerce Landing Page",
      description:
        "An e-commerce furniture website built from a free Figma template. Based on the Panto - Furniture Landing Page template.",
      tech: ["React", "Tailwind CSS", "Hero UI"],
      image: "",
      repo: "https://github.com/iHubG/e-commerce-furn",
      live: "https://e-commerce-furn.vercel.app/",
    },
  ];

  return (
    <section className="grid grid-cols-6 gap-10 max-w-6xl mx-auto">
      <div
        className="rounded-xl 
                   px-0 py-5 lg:py-10 lg:px-5 col-span-6"
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-center font-semibold text-gray-900 dark:text-white mb-10">
            Projects
          </h2>

          <div className="grid gap-10 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
