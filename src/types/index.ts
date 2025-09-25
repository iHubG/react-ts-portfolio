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

export interface CertificatesProps {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string | React.ComponentType<{ size?: number; color?: string }>;
  url: string;
  color?: string;
}

export type MessageType = "user" | "ai" | "error";

export interface ChatMessage {
  type: MessageType;
  content: string;
  timestamp: number;
}

export interface AiInputProps {
  onSend: (text: string) => void;
  loading: boolean;
}

export interface AiMessagesProps {
  messages: ChatMessage[];
  loading: boolean;
}


