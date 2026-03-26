"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa'

type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  link: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Certified in Data Structures & Algorithms (Java/C++)',
    issuer: 'W3Grads',
    date: 'Jun 2025 – Jul 2025',
    description:
      'Learned and applied key DSA concepts including recursion, sorting, searching, trees, graphs, and dynamic programming. Solved 100+ DSA exercises to strengthen analytical thinking and coding efficiency.',
    link: '/certificates/dsa-certificate.pdf',
  },
  {
    id: 2,
    title: 'NPTEL Certification in Cloud Computing',
    issuer: 'NPTEL',
    date: '2025',
    description:
      'Completed certification in cloud computing covering core concepts such as cloud architecture, virtualization, service models, deployment models, and modern cloud-based application fundamentals.',
    link: '/certificates/cloud-computing-certificate.pdf',
  },
  {
    id: 3,
    title: 'Computational Theory: Language Principle & Finite Automata Theory',
    issuer: 'Infosys',
    date: '2025',
    description:
      'Completed training in computational theory with focus on formal languages, automata, finite state machines, and language principles essential for theoretical computer science fundamentals.',
    link: '/certificates/computational-theory-certificate.pdf',
  },
  {
    id: 4,
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
    issuer: 'Infosys',
    date: '2025',
    description:
      'Completed certification in prompt engineering and generative AI, learning how to effectively work with LLMs, design better prompts, and understand modern AI-assisted workflows.',
    link: '/certificates/chatgpt-prompt-engineering-certificate.pdf',
  },
]

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <motion.div
      className="card hover:shadow-accent/20 group transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-accent/10 p-3 rounded-full shrink-0">
          <FaCertificate className="text-accent text-xl" />
        </div>

        <div>
          <h3 className="text-lg md:text-xl text-text font-semibold group-hover:text-accent transition-colors duration-300 leading-snug">
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