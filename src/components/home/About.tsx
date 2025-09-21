const About = () => {
  return (
    <section
      className="max-w-6xl mx-auto mt-10 lg:mt-20 rounded-xl 
                 border-[0.5px] border-gray-300 
                 px-3 py-5 lg:px-5 
                 bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          About
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m aspiring to be a full-stack web developer, currently upskilling in
          React, Vue, and Laravel. I also plan to learn Next.js in the future
          and dive deeper into AI. I love creating stunning websites and web
          applications as personal projects for now. I’m open to opportunities
          and willing to collaborate on exciting projects. Let’s connect and
          build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
