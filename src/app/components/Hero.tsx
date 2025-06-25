"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 -left-20 w-[300px] h-[300px] bg-cyan-600 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-blue-600 opacity-20 rounded-full blur-3xl z-0" />

      <div ref={ref} className="relative z-10 w-full max-w-7xl">
        <AnimatePresence>
          {visible && (
            <motion.div
              key="hero-content"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
            >
              {/* Left Content */}
              <div className="text-white max-w-xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-gray-300">
                  Hey! This is
                </h2>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 text-transparent bg-clip-text">
                  Minhaj Ahmed
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8">
                  I'm a Front-End Developer passionate about building
                  blazing-fast, beautiful, and responsive web apps. With
                  Next.js, Tailwind CSS, and TypeScript, I bring bold ideas to
                  life on the web.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start">
                  {/* View My Work */}
                  <a
                    href="#projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-md transition duration-300 shadow-lg"
                  >
                    View My Work
                  </a>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4 text-white text-2xl">
                    <a
                      href="https://github.com/Royal-Aquarius?tab=repositories"
                      target="_blank"
                      className="hover:text-gray-400 transition transform hover:scale-110"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/minhaj-109-rajput/"
                      target="_blank"
                      className="hover:text-blue-500 transition transform hover:scale-110"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://wa.me/923148104382"
                      target="_blank"
                      className="hover:text-green-400 transition transform hover:scale-110"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <Image
                  src="/Minji.png"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
