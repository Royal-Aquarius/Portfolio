"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const About = () => {
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
      id="about"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white overflow-hidden"
    >
      {/* Glowing blurred background effects */}
      <div className="absolute top-0 -left-10 w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-10 w-[300px] h-[300px] bg-blue-600 opacity-20 rounded-full blur-3xl z-0" />

      <div ref={ref} className="relative z-10 w-full">
        <AnimatePresence>
          {visible && (
            <motion.div
              key="about-content"
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-md">
                <span className="border-b-4 border-cyan-500 pb-1 inline-block">
                  About Me
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide px-4 sm:px-10">
                I'm a passionate Front-End Developer with a strong focus on
                building modern, responsive, and user-friendly web applications
                using <span className="text-cyan-400 font-medium">Next.js</span>
                , <span className="text-sky-400 font-medium">Tailwind CSS</span>
                , and{" "}
                <span className="text-blue-400 font-medium">TypeScript</span>. I
                specialize in crafting sleek, high-performance UIs that blend
                aesthetics with seamless functionality. From interactive
                portfolios to fully responsive e-commerce stores, my goal is to
                build interfaces that deliver exceptional user experiences.
                Currently, I'm enrolled in the{" "}
                <span className="text-cyan-400 font-semibold">
                  Governor Sindh’s Initiative for Artificial Intelligence
                  (GIAIC)
                </span>
                , where I’m honing my skills through real-world, industry-level
                projects and staying ahead in the rapidly evolving tech
                landscape. With a strong eye for detail and a deep commitment to
                clean, maintainable code, I aim to contribute to impactful
                products and meaningful innovations. I'm always excited to
                collaborate, learn, and push the boundaries of what's possible
                on the web.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
