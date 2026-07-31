import ProjectCard from "./ProjectCard";
import { projectsData } from "../../assets/projectsData";
import Link from "next/link";

const Projects = () => {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="mt-20">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">
        PROJECTS
      </h2>

      <div className="space-y-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="
            px-6 py-3
            border border-gray-300
            rounded-md
            text-gray-700
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
          "
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;