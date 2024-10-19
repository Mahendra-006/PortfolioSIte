import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold text-white-900"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Info */}
      <div className="text-center tracking-tight">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg text-slate-300"
        >
          {CONTACT.address}
        </motion.p>

        {/* Email */}
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.3 }}
          href="mailto:mahendra2002pratap@gmail.com"
          className="border-b-2 border-transparent text-lg text-blue-600 transition-all duration-300 ease-in-out hover:border-blue-600 hover:text-blue-800"
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* Social Icons (Optional Section for Better Design) */}
      <div className="mt-8 flex justify-center space-x-6">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.linkedin.com/in/mahendra-pratap-singh-442590218/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 transition-colors duration-300 hover:text-blue-600"
        >
          <FaLinkedin size={32} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/Mahendra-006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 transition-colors duration-300 hover:text-gray-700"
        >
          <FaGithub size={32} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://leetcode.com/u/mahendra0611/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 transition-colors duration-300 hover:text-orange-500"
        >
          <SiLeetcode size={32} />
        </motion.a>
      </div>
    </div>
  );
};
export default Contact
