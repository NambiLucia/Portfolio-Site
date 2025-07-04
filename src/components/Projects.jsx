import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Nova Voucher Payment Manangement System',
    description: 'A sleek and modern portfolio to showcase my skills and projects.',
    demoLink: 'https://your-portfolio.com',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 2,
    title: 'Afaazi',
    description: 'A productivity app to manage and track daily tasks with deadlines.',
    demoLink: 'https://taskmanager.demo.com',
    codeLink: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    title: 'Buganda Yiiyo yange',
    description: 'An online store built with React and Stripe for payment processing.',
    demoLink: 'https://ecommerce.demo.com',
    codeLink: 'https://github.com/yourusername/ecommerce-store',
  },
  
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-teal-400 text-center">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(({ id, title, description, demoLink, codeLink }) => (
            <div key={id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-teal-500 transition">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-300 mb-5">{description}</p>
              <div className="flex space-x-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md font-semibold transition"
                >
                  Live Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-4 py-2 rounded-md font-semibold transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
