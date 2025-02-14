import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce solution with advanced features and seamless user experience.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent analytics platform providing real-time insights and predictive analysis.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Social Media Management Tool",
    description:
      "A comprehensive tool for managing multiple social media accounts with scheduling and analytics.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Express", "PostgreSQL"],
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const cards = container.querySelectorAll(".project-card");

      // Temporarily remove animation to debug
      gsap.from(cards, {
        opacity: 1,  // Set opacity to 1 for testing
        y: 0,        // Reset vertical position for testing
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        // Remove scrollTrigger temporarily for testing
        // scrollTrigger: {
        //   trigger: container,
        //   start: "top 80%",
        //   end: "bottom 20%",
        //   toggleActions: "play none none reverse",
        // },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Latest Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
