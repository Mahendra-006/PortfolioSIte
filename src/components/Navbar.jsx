import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion"

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='bg-gradient-to-r from-indigo-300 via-teal-500 to-rose-500 bg-clip-text text-3xl tracking-tight text-transparent'>Mahendra</div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.linkedin.com/in/mahendra-pratap-singh-442590218/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0A66C2", fontSize: "2rem" }}
      >
        <FaLinkedin />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://github.com/Mahendra-006"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#333", fontSize: "2rem" }}
      >
        <FaGithub />
      </motion.a>

       <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://leetcode.com/u/mahendra0611/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#FFA116", fontSize: "2rem" }}
      >
        <SiLeetcode />
      </motion.a>
    </div>
  </nav>
}

export default Navbar