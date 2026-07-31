import { projectsData } from "../assets/projectsData";
import ProjectCard from "../Components/Project/ProjectCard";



const ProjectsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-5 py-20 bg-white">
      <h1 className="text-4xl font-bold mb-12">
        All Projects
      </h1>
 
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;