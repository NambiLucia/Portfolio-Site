import React from 'react';

const Hero = () => {
  return (
  <section className="bg-gray-900 pt-18 text-white min-h-screen flex items-center justify-center font-poppins" id="hero">
  <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between">
   
    <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm <span className="text-teal-400">Nambi Lucia</span>
      </h1>
      <p className="text-2xl text-gray-300 mb-6">
        I’m a Full-Stack Developer committed to making a difference by building solutions to local problems. My goal is to create technology designed for and by the community — local tech solutions that truly solve local challenges.
      </p>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#contact"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Contact Me
        </a>
        <a
          href="\Resume-portfolio.pdf"
          download
          className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-md font-medium transition"
        >
          Download CV
        </a>
      </div>
    </div>

    {/* Right Image*/}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/picture.jpg"
        alt="Developer Image"
        className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-teal-500"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;