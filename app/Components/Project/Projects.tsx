import ProjectCard from "./ProjectCard";
import { projectsData } from "../../assets/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="mt-20">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">
        PROJECTS
      </h2>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;