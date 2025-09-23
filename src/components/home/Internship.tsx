const Internship = () => {
  return (
    <div className="rounded-xl border-[0.5px] border-gray-300 px-3 py-5 lg:px-5 bg-gray-50 dark:bg-gray-900 col-span-6 lg:col-span-2">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Internship Experience
        </h2>

        <div>
          <h3 className="text-base font-semibold text-gray-600 dark:text-gray-400">
            Full-Stack Development - Student Intern
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Accenture Philippines • Remote
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            March 2025 – June 2025
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
            Key Achievements:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-1">
            <li>
              Completed <strong>On-the-Job Training (OJT)</strong> as part of
              BSIT program.
            </li>
            <li>
              Trained in <strong>Java, Spring Boot, and Angular</strong> for
              enterprise web apps.
            </li>
            <li>
              Gained hands-on experience with backend APIs, frontend frameworks,
              and database integration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Internship;
