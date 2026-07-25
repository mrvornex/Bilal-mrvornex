"use client";

import React, { useState } from "react";
import ProjectButton from "./ProjectButton";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  sourceCode: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveDemo,
  sourceCode,
  techStack,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="border border-gray-200 rounded-md p-5 hover:bg-gray-50 transition">

        <div className="flex flex-col md:flex-row gap-6">

          {/* Image */}
          <div className="md:w-80 shrink-0">
            <img
              src={image}
              alt={title}
              onClick={() => setIsModalOpen(true)}
              className="w-full h-48 object-cover rounded cursor-pointer"
            />
          </div>

          {/* Content */}
          <div className="flex-1">

            <h3 className="text-xl font-semibold text-black">
              {title}
            </h3>

            <p className="text-gray-600 leading-7 mt-3">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-500"
                >
                  {tech}
                  {index !== techStack.length - 1 && " • "}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-6 flex-wrap">
  {liveDemo && (
    <ProjectButton href={liveDemo}>
      Live Demo
    </ProjectButton>
  )}

  <ProjectButton href={sourceCode}>
    Source Code
  </ProjectButton>
</div>

          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-5"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;