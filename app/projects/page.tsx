"use client"

import Image from "next/image"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

  const projects = [
    {
      title: "AI Powered Smart Search Platform",
      image: "/search.png",
      category: "AI Full Stack Web Application",
      description:
        "Unified AI driven search platform for jobs products and opportunities using web scraping and intelligent recommendations with real time analytics and scalable backend",
      technologies: [
        "React",
        "Tailwind CSS",
        "Supabase",
        "Gemini AI API",
        "Web Scraping",
        "AWS EC2"
      ],
      link: "https://mysearchai.vercel.app/"
    },
    {
      title: "AI Study Genius",
      image: "/study.png",
      category: "AI Learning Platform",
      description:
        "AI powered study assistant offering quiz generation OCR based learning exam prediction and real time collaboration for students",
      technologies: [
        "Flask",
        "Gemini API",
        "ChatGPT API",
        "OCR",
        "WebSocket"
      ],
      link: "https://thestudymate.netlify.app/"
    },
    {
      title: "Gold Investment Platform",
      image: "/gold.png",
      category: "FinTech Web Platform",
      description:
        "Secure investment platform with real time transactions automated portfolio management KYC verification live chat and admin analytics dashboards",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "Supabase",
        "WebSocket",
        "NOWPayments API"
      ],
      link: "https://mygoldinvest.netlify.app/"
    },
    {
      title: "CSpedia",
      image: "/cs.png",
      category: "Educational Resource Platform",
      description:
        "Centralized academic resource platform enabling students to access past papers lecture notes and lab materials through a clean responsive interface",
      technologies: [
        "React",
        "Supabase",
        "Tailwind CSS"
      ],
      link: "https://thecspedia.netlify.app/"
    }

  ]

export default function ProjectsPage() {
  return (
    <div className={`min-h-screen bg-[#011520] text-white ${spaceGrotesk.className}`}>
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        {/* Header */}
        <header className="max-w-[1400px] mx-auto">
          <nav className="flex justify-between items-center mb-16">
            {/* <Link href="/">
              <div className="relative w-[4.5rem] h-[4.5rem]">
                <Image
                  src="/placeholder.svg"
                  alt="Profile"
                  fill
                  className="rounded-full border-2 border-white/20 object-cover"
                />
              </div>
            </Link> */}
            <Link href="/">
              <Button
                variant="outline"
                className="rounded-full border border-white/20 text-white bg-white/10 hover:bg-white/20 px-10 py-6 text-base font-light"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore my diverse portfolio spanning various design disciplines and cutting-edge technologies.
            </p>
          </motion.div>
        </header>

        {/* Projects Grid */}
        <section className="rounded-[2.5rem] bg-white text-gray-900 overflow-hidden shadow-2xl">
          <div className="py-24 md:py-32 px-6 relative overflow-hidden">
            <div className="absolute top-20 left-0 text-[12rem] md:text-[20rem] font-bold text-gray-200/40 leading-none select-none pointer-events-none">

            </div>
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-teal-400 mb-2 font-medium text-sm">{project.category}</p>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-4 py-2 text-sm transition-colors duration-300">
                              View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        )}

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 px-6 overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/bg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(1,21,32,0.7), rgba(1,21,32,0.5))',
              }}
            />
          </div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-8 leading-[1.2]">
                Ready to bring your ideas to life?
              </h2>
              <Button className="bg-teal-500 hover:bg-teal-600 rounded-full px-8 py-6 text-base transition-colors duration-300">
                Let's work together <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
