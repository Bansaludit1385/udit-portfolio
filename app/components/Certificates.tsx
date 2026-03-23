"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa'

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Coursera / Udemy / NPTEL',
    date: '2025',
    description: 'Learned modern full stack development including React, Next.js, Node.js, APIs, and deployment.',
    link: '#'
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    issuer: 'Coding Ninjas / Udemy / Apna College',
    date: '2024',
    description: 'Covered arrays, linked lists, trees, graphs, recursion, dynamic programming, and problem solving.',
    link: '#'
  },
  {
    id: 3,
    title: 'Java Programming',
    issuer: 'Oracle / Udemy / Coursera',
    date: '2024',
    description: 'Built strong understanding of Java fundamentals, OOP concepts, exception handling, and collections.',
    link: '#'
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2023',
    description: 'Learned HTML, CSS, Flexbox, Grid, responsive layouts, and modern UI building principles.',
    link: '#'
  }
]

const CertificateCard = ({ certificate, index }: { certificate: typeof certificates[0]; index: number }) => {
  return (
    <motion.div
      className="card p-6 hover:shadow-accent/20 group transition-all duration-500 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
          <FaAward size={20} />
        </div>

        {certificate.link !== '#' && (
          <motion.a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
        )}
      </div>

      <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
        {certificate.title}
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-textLight text-sm">
          <FaBuilding className="mr-2 text-accent" />
          <span>{certificate.issuer}</span>
        </div>

        <div className="flex items-center text-textLight text-sm">
          <FaCalendarAlt className="mr-2 text-accent" />
          <span>{certificate.date}</span>
        </div>
      </div>

      <p className="text-textLight leading-relaxed">
        {certificate.description}
      </p>
    </motion.div>
  )
}

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 scroll-mt-20">
      <div className="section-heading-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
      </div>

      <motion.p
        className="text-textLight mb-12 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A collection of certifications that reflect my continuous learning journey in software development, problem solving, and modern technologies.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates