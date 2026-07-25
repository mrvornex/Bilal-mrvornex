import React from "react";

interface ProjectButtonProps {
  href: string;
  children: React.ReactNode;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-4 py-2
        border border-gray-300
        rounded-md
        text-sm
        text-gray-700
        hover:bg-black
        hover:text-white
        transition-all
        duration-300
      "
    >
      {children}
    </a>
  );
};

export default ProjectButton;