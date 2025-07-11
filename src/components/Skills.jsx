import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Prisma',
    'Git & GitHub',
    'REST APIs',
  ];

  return (
    <section className="bg-gray-900 font-poppins text-white py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-teal-400">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-xl p-4 text-center font-semibold border border-teal-500 hover:bg-teal-500 hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
