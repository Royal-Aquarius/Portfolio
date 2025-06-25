"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// ICONS
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { MdDevices } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Responsive Design", icon: <MdDevices className="text-green-400" /> },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] overflow-hidden text-white"
    >
      {/* Background glowing blur effects */}
      <div className="absolute top-0 -left-20 w-[300px] h-[300px] bg-cyan-600 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-blue-700 opacity-20 rounded-full blur-3xl z-0" />

      <div ref={ref} className="relative z-10 w-full">
        <AnimatePresence>
          {visible && (
            <motion.div
              key="skills-section"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 drop-shadow-md">
                My Skills
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 px-4 sm:px-10">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="bg-[#1f1f1f] border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-cyan-600/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <p className="text-sm text-gray-200 font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
