"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaTrophy, FaCode, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa"

type Achievement = {
  id: number
  title: string
  description: string
  date: string
  icon: React.ReactNode
  link?: string
  linkLabel?: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "125+ Coding Problems Solved",
    description:
      "Solved 125+ coding challenges across platforms including LeetCode, GeeksforGeeks, HackerRank, and Codeforces, building a strong foundation in data structures, algorithms, and problem-solving.",
    date: "Ongoing",
    icon: <FaCode size={24} />,
  },
  {
    id: 2,
    title: "LeetCode Problem Solving Profile",
    description:
      "Actively practice data structures and algorithms on LeetCode with consistent problem-solving to improve coding logic, optimization, and interview readiness.",
    date: "Active",
    icon: <FaLaptopCode size={24} />,
    link: "https://leetcode.com/u/udit1385/",
    linkLabel: "View LeetCode Profile",
  },
  {
    id: 3,
    title: "Skill Badges in Problem Solving",
    description:
      "Earned skill badges on LeetCode and HackerRank, demonstrating strong proficiency in DSA, coding consistency, and analytical problem-solving.",
    date: "Achieved",
    icon: <FaTrophy size={24} />,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative group overflow-hidden rounded-2xl border border-accent/20 bg-secondary/60 backdrop-blur-md p-6 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shadow-md shrink-0">
            {achievement.icon}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors duration-300">
              {achievement.title}
            </h3>

            <p className="text-textLight mt-2 leading-relaxed">
              {achievement.description}
            </p>

            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-accent hover:text-white transition-colors duration-300 font-medium"
              >
                {achievement.linkLabel || "View Profile"} <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="shrink-0">
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
            {achievement.date}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 scroll-mt-20">
      <div className="section-heading-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Coding Achievements
        </motion.h2>
      </div>

      <motion.p
        className="text-textLight mb-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        These achievements reflect my consistent practice in competitive programming and problem-solving across coding platforms, helping me strengthen my DSA foundation and improve technical interview readiness.
      </motion.p>

      <motion.div
        className="space-y-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </motion.div>
    </section>
  )
}

export default Achievements