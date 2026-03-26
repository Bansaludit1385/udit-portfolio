"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa'
import Image from 'next/image'

type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
  link: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Certified in Data Structures & Algorithms (Java/C++)',
    issuer: 'W3Grads',
    date: 'Jun 2025 – Jul 2025',
    description:
      'Completed intensive DSA training covering recursion, sorting, searching, trees, graphs, and dynamic programming with strong problem-solving practice.',
    image: 'dsa-certificate.png',
    link: '/certificates/dsa-certificate.pdf',
  },
  {
    id: 2,
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Jan 2025 – Apr 2025',
    description:
      'Completed NPTEL certification in Cloud Computing, covering cloud architecture, virtualization, service models, and deployment fundamentals.',
    image: 'cloud-computing-certificate.png',
    link: '/certificates/cloud-computing-certificate.pdf',
  },
  {
    id: 3,
    title: 'Computational Theory: Language Principle & Finite Automata Theory',
    issuer: 'Infosys Springboard',
    date: 'Aug 21, 2025',
    description:
      'Completed course on formal languages, automata, finite state machines, and theoretical computer science foundations.',
    image: 'computational-theory-certificate.png',
    link: '/certificates/computational-theory-certificate.pdf',
  },
  {
    id: 4,
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
    issuer: 'Infosys Springboard',
    date: 'Aug 21, 2025',
    description:
      'Completed certification focused on prompt engineering, generative AI concepts, and practical LLM usage for real-world workflows.',
    image: 'chatgpt-prompt-engineering-certificate.png',
    link: '/certificates/chatgpt-prompt-engineering-certificate.pdf',
  },
]

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <motion.div
      className="card overflow-hidden hover:shadow-accent/20 group transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Certificate Image */}
      <div className="relative overflow-hidden h-52 -mx-6 -mt-6 mb-6 rounded-t-lg bg-white">
        <Image
          src={`/certificate-images/${certificate.image}`}
          alt={certificate.title}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <motion.a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary p-3 rounded-full text-accent hover:bg-accent hover:text-primary transition-colors duration-300 shadow-md hover:shadow-accent/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-accent/10 p-3 rounded-full shrink-0">
          <FaCertificate className="text-accent text-lg" />
        </div>

        <div>
          <h3 className="text-lg text-text font-semibold group-hover:text-accent transition-colors duration-300 leading-snug">
            {certificate.title}
          </h3>
          <p className="text-sm text-accent mt-1">
            {certificate.issuer} • {certificate.date}
          </p>
        </div>
      </div>

      <p className="text-textLight mb-6 leading-relaxed flex-grow">
        {certificate.description}
      </p>

      {/* Button */}
      <motion.a
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center justify-center px-4 py-2 border-2 hover:shadow-lg hover:shadow-accent/10"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        View Certificate <FaExternalLinkAlt className="ml-2" />
      </motion.a>
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
          My Certifications
        </motion.h2>
      </div>

      <motion.p
        className="text-textLight mb-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        These certifications reflect my learning journey in data structures,
        algorithms, cloud computing, theoretical computer science, and modern AI tools.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  )
}

export default Certificates