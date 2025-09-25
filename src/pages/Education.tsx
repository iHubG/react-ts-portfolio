import { GraduationCap, Award, ExternalLink } from "lucide-react";
import Accenture from "@/assets/images/Accenture.jpg";
import JavaScriptPHP from "@/assets/images/JavaScriptPHP.jpg";
import MobileApp from "@/assets/images/AppDev.jpg";
import Cybersecurity from "@/assets/images/CyberSecurity.jpg";
import { SiUdemy, SiAccenture, SiFreecodecamp } from "react-icons/si";
import { type CertificatesProps } from "@/types";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      school: "Isabela State University - Cauayan Campus",
      year: "Sep 2021 – July 2025",
      specialization: "Web and Mobile Application Development",
      achievement:
        "4th Place — Hack4Gov 3 (Cyber Range Exercises), CSU Andrews Campus • Tuguegarao City • August 2024",
    },
  ];

  const certificates: CertificatesProps[] = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "July 8, 2025",
      image: SiFreecodecamp,
      url: "https://www.freecodecamp.org/certification/ianmacalinao/responsive-web-design",
      color: "#0A0A23",
    },
    {
      id: 2,
      title: "Full-Stack Development ATA",
      issuer: "Accenture (via Udemy)",
      year: "June 10, 2025",
      image: SiAccenture,
      url: Accenture,
      color: "#A100FF",
    },
    {
      id: 3,
      title: "JavaScript and PHP",
      issuer: "Udemy",
      year: "December 28, 2024",
      image: SiUdemy,
      url: JavaScriptPHP,
      color: "#A435F0",
    },
    {
      id: 4,
      title: "Mobile App Development",
      issuer: "Hostcripter Web Services",
      year: "January, 2024",
      image: MobileApp,
      url: MobileApp,
    },
    {
      id: 5,
      title: "Cybersecurity",
      issuer: "Code",
      year: "November, 2024",
      image: Cybersecurity,
      url: Cybersecurity,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-0 py-5 lg:py-10 lg:px-5">
        <title>Ian Macalinao - Education</title>
      <h2 className="text-2xl text-center font-semibold text-gray-900 dark:text-white mb-10">
        Education & Certificates
      </h2>

      {/* Education */}
      <div className="mb-12">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
          <GraduationCap
            size={20}
            className="text-blue-600 dark:text-blue-400"
          />
          Education
        </h3>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700 
                         hover:shadow-md dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition"
            >
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {edu.degree}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {edu.school} • {edu.year}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Specialization:</strong> {edu.specialization}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Achievement:</strong> {edu.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
          <Award size={20} className="text-yellow-500" />
          Certificates
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700 
                         hover:shadow-md dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] 
                         transition flex flex-col items-center text-center"
            >
              {cert.image &&
                (typeof cert.image === "string" ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-16 h-16 object-contain mb-3"
                  />
                ) : (
                  <span className="w-16 h-16 flex items-center justify-center mb-3">
                    {typeof cert.image === "function" ? (
                      <cert.image
                        size={64}
                        color={cert.color || "currentColor"}
                      />
                    ) : null}
                  </span>
                ))}

              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer} • {cert.year}
              </p>
              <span className="flex items-center gap-1 mt-2 text-blue-600 dark:text-blue-400 text-xs font-medium">
                View Certificate <ExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
