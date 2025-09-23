import { ExternalLink, Github } from "lucide-react";
import { type ProjectCardProps } from "@/types";

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      key={project.id}
      className="group rounded-lg border border-gray-200 dark:border-gray-700 
             bg-gray-50 dark:bg-gray-800 overflow-hidden 
             hover:shadow-lg 
             dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
             transition"
    >
      {/* Thumbnail with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-medium rounded-full 
                         bg-gray-100 text-gray-700 
                         dark:bg-gray-700 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm  py-1 px-2 rounded  text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition
                 bg-gray-100/70 dark:bg-gray-900/40 backdrop-blur-sm
                 border border-gray-300 hover:border-gray-400 dark:border-gray-800/50 dark:hover:border-gray-700
                 hover:bg-gray-200 dark:hover:bg-gray-800/60 "
          >
            <Github size={16} /> Repository
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm  py-1 px-2 rounded  text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition
                 bg-gray-100/70 dark:bg-gray-900/40 backdrop-blur-sm
                 border border-gray-300 hover:border-gray-400 dark:border-gray-800/50 dark:hover:border-gray-700
                 hover:bg-gray-200 dark:hover:bg-gray-800/60 "
          >
            <ExternalLink size={16} /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
