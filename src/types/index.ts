export interface SocialButtonProps {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}
