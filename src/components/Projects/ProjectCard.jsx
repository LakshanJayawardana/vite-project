// src/components/Projects/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  const CodeIcon = () => (
    <svg className="icon-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: '0.8' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  return (
    <div className="card project-card">
      <div className={`project-image ${project.imageClass}`}>
        <CodeIcon />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-blue-600 font-medium mb-4">
          {project.tech}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;