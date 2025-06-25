'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'Millitant Website',
    image: '/projects/millitant.jpg',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://hamas-militant-group.vercel.app/',
  },
  {
    name: 'E-commerce Store',
    image: '/projects/store.jpg',
    tech: ['React', 'Tailwind', 'Stripe'],
    link: 'https://avion-decor.vercel.app/',
  },
  {
    name: 'Static Interactive Resume',
    image: '/projects/resume.png',
    tech: ['Next.js', 'Markdown', 'Vercel'],
    link: 'https://milestone1-2-ivory-nine.vercel.app/',
  },
];

const Projects = () => {
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
      id="projects"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] overflow-x-hidden text-white"
    >
      {/* Blurred glow effects */}
      <div className="absolute top-0 -left-20 w-[300px] h-[300px] bg-cyan-600 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-blue-700 opacity-20 rounded-full blur-3xl z-0" />

      <div ref={ref} className="relative z-10">
        <AnimatePresence>
          {visible && (
            <motion.div
              key="projects-section"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 drop-shadow-md leading-tight">
                Projects
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {projects.map((project) => (
                  <motion.a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="group bg-[#1f1f1f] border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
                  >
                    <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px]">
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                        <div className="flex flex-wrap gap-2 text-sm mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-end text-cyan-400 text-sm gap-1">
                        View Project <FaExternalLinkAlt className="text-xs" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
