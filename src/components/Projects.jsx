import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Nova Voucher Payment Manangement System',
    description: 'Nova Payment Voucher Management System – A secure, paperless platform for managing organizational payments. Built for efficiency and automation, it enables businesses to initiate and approve payments entirely online.',
    demoLink: 'https://novapayment.netlify.app/',
    codeLink: 'https://github.com/NambiLucia/Nova-Client',
  },
  {
    id: 2,
    title: 'Afaazi',
    description: 'Afaazi Events – A centralized wedding service booking platform named after the Lugbara word for “event.” It offers an intuitive interface for users to register, choose venues, and book preferred service providers—streamlining the entire wedding planning process.',
    demoLink: 'https://afaazi-wedding-platform.vercel.app/',
    codeLink: 'https://github.com/NambiLucia/Afaazi-wedding-Platform',
  },
  {
    id: 3,
    title: 'Buganda Yiiyo yange',
    description: 'Buganda Yiiyo, Yange – An intuitive web portal for Buganda Kingdom youth, delivering up‑to‑date news and event listings for all youth and kingdom activities.',
    demoLink: 'https://bugandayiyoyange.org/',
    codeLink: 'https://bugandayiyoyange.org',
  },
  
];

const Projects = () => {
  return (
    <section className="bg-gray-900 font-poppins text-white py-20 px-6" id="projects">
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
