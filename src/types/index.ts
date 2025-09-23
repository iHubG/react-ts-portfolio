

export interface SocialButtonProps {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo: string;
  live: string;
}

export interface ProjectCardProps {
  project: ProjectProps;
}

export interface InternshipProps {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface EducationProps {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  certificates?: string[];
}

export interface SkillProps {
  name: string;
  level?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}
