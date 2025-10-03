
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const ProjectOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Portfolio Website
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A personal portfolio website built with React and TailwindCSS
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "TailwindCSS", "Framer Motion"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/username/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-white/80"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href="https://portfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-white/80"
        >
          <LinkIcon size={20} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};

const ProjectTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        E-commerce Platform
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Full-stack e-commerce platform with user authentication and payment integration
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Next.js", "Node.js", "MongoDB"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/username/ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-white/80"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href="https://ecommerce.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-white/80"
        >
          <LinkIcon size={20} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const cards = [
    {
      id: 1,
      content: <ProjectOne />,
      className: "md:col-span-2",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=3474&auto=format&fit=crop",
    },
    {
      id: 2,
      content: <ProjectTwo />,
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=3474&auto=format&fit=crop",
    },
    // You can add more projects here as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-16"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="max-w-7xl mx-auto">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
