import { ExternalLink } from "lucide-react";
import { type SocialButtonProps } from "@/types";

const SocialButton = ({ href, label, Icon, color }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group/btn flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto
                 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition
                 bg-gray-100/70 dark:bg-gray-900/40 backdrop-blur-sm
                 border border-gray-300 hover:border-gray-400 dark:border-gray-800/50 dark:hover:border-gray-700
                 hover:bg-gray-200 dark:hover:bg-gray-800/60
                 px-4 py-2 sm:px-5 sm:py-2.5 text-sm rounded-md"
    >
      <Icon
        size={18}
        className={`${color} group-hover/btn:scale-110 transition-transform`}
      />
      <span className="font-medium">{label}</span>
      <ExternalLink
        size={14}
        className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default SocialButton;
