import Internship from "./Internship";

const About = () => {
  return (
    <section className="grid grid-cols-6 gap-10 lg:gap-5 max-w-6xl mx-auto mt-10 lg:mt-20 ">
      <div
        className="rounded-xl 
                 border-[0.5px] border-gray-300 
                 px-3 py-5 lg:px-5 
                 bg-gray-50 dark:bg-gray-900
                 col-span-6 lg:col-span-4"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            About
          </h2>
          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m an aspiring full-stack developer, upskilling in React, Vue, and
            Laravel, with plans to learn Next.js and explore AI. I enjoy
            building visually appealing web apps, mostly through personal
            projects, and I’m eager to collaborate on exciting opportunities.
          </p>

          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey began in 2023 with HTML, CSS, and JavaScript, later
            expanding to PHP, MySQL, Bootstrap, and Python. By 2025, I advanced
            into modern frameworks like Tailwind, Vue, React, and Laravel. I’m
            proud of my growth so far and motivated to keep pushing forward.
          </p>
        </div>
      </div>
      <Internship />
    </section>
  );
};

export default About;
