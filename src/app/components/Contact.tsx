'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields!');
      return;
    }

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then(
        () => {
          toast.success('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        () => {
          toast.error('Failed to send message. Try again!');
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] overflow-x-hidden text-white"
    >
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Background blur circles */}
      <div className="absolute top-0 -left-20 w-[300px] h-[300px] bg-blue-600 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-indigo-600 opacity-20 rounded-full blur-3xl z-0" />

      <div ref={ref} className="relative z-10">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-500 drop-shadow-md">
                Contact Me
              </h2>
              <p className="text-gray-300 mb-10 text-sm sm:text-base">
                Interested in working together? Reach out!
              </p>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-[#1f1f1f]/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-md space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>

              {/* Social Icons */}
              <div className="mt-10 flex justify-center gap-6 text-2xl">
                <a
                  href="mailto:mminhajahmed112@gmail.com"
                  className="hover:text-green-500 transition"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/minhaj-109-rajput/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Royal-Aquarius?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
