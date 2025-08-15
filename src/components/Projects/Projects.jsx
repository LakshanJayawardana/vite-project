import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      tech: "React, Node.js, Stripe",
      description: "Complete online store with payment integration and admin dashboard",
      imageClass: "blue-purple"
    },
    {
      title: "Business Website",
      tech: "WordPress, Custom Theme",
      description: "Professional corporate website with CMS and SEO optimization",
      imageClass: "green-blue"
    },
    {
      title: "SaaS Landing Page",
      tech: "Next.js, Tailwind CSS",
      description: "High-converting landing page with modern design and animations",
      imageClass: "orange-pink"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md-text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: '32rem', margin: '0 auto' }}>
            A showcase of successful projects delivered to satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;