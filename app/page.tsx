"use client"

import Image from "next/image"
import { ArrowUpRight, MonitorSmartphone, Code, PenTool, Eye, Github, Twitter, Linkedin, Instagram, CheckCircle2, Monitor, Server, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero from "@/app/hero"
import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
import ContactModal from "./contact-modal"
import { motion } from "framer-motion"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function Portfolio() {
  const projects = [
    {
      title: "Mobile App Design",
      image: "/placeholder.svg",
      category: "UI/UX Design",
      description: "Intuitive and engaging mobile app interface design for a fitness tracking application.",
      technologies: ["Figma", "Sketch", "Adobe XD"],
    },
    {
      title: "E-commerce Website",
      image: "/placeholder.svg",
      category: "Web Development",
      description: "Fully responsive e-commerce platform with seamless user experience and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Brand Identity",
      image: "/placeholder.svg",
      category: "Branding",
      description:
        "Comprehensive brand identity design including logo, color palette, and brand guidelines for a tech startup.",
      technologies: ["Adobe Illustrator", "Adobe InDesign"],
    },
    {
      title: "Social Media Dashboard",
      image: "/placeholder.svg",
      category: "UI/UX Design",
      description:
        "Centralized dashboard for managing multiple social media accounts with analytics and scheduling features.",
      technologies: ["Figma", "React", "D3.js"],
    },
  ]

const skills = [
  {
    category: "Frontend Development",
    description: "Building responsive, interactive user interfaces with modern frameworks",
    color: "from-blue-500 to-cyan-400",
    icon: Monitor, // You'd import this icon component
    items: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Backend Development",
    description: "Server-side logic, APIs, and database management",
    color: "from-green-500 to-emerald-400",
    icon: Server, // You'd import this icon component
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Supabase", level: 70 }
    ]
  },
  {
    category: "Full Stack",
    description: "End-to-end application development and deployment",
    color: "from-purple-500 to-pink-400",
    icon: Code, // You'd import this icon component
    items: [
      { name: "MERN Stack", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Git & GitHub", level: 75 },
      { name: "Deployment", level: 70 }
    ]
  }
];

  return (
    <div className={`min-h-screen bg-[#011520] text-white ${spaceGrotesk.className}`}>
      <div className="px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16 pt-8">
        <Hero />

        {/* Featured and Projects Section */}
        <section id="projects" className="light-section rounded-[2.5rem] bg-white text-gray-900 overflow-hidden shadow-2xl">
          {/* Featured Section */}
          <div id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
  {/* Background Number */}
  <div className="absolute top-20 left-0 text-[12rem] md:text-[20rem] font-bold text-gray-200/40 leading-none select-none pointer-events-none">
    01
  </div>

  <div className="max-w-[1400px] mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
      {/* Left Column */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-500 text-sm font-semibold tracking-[0.2em] mb-8">ABOUT ME</p>
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-8 leading-[1.2] tracking-tight">
          Full Stack Developer
          <br />
          Building modern web
          <br />
          applications with MERN.
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          I'm Zamar Masood, a passionate Full Stack Developer with 1+ years of experience specializing in the MERN stack and Supabase. I thrive on transforming ideas into scalable, high-performance web applications that deliver exceptional user experiences.
        </p>

        {/* Squiggly Line Icon */}
        <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12C3 12 7 4 12 4C17 4 21 12 21 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* Right Column - Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            title: "Frontend Development",
            description: "Building responsive, interactive UIs with React, Next.js, and modern frameworks.",
            icon: MonitorSmartphone,
            featured: true,
          },
          {
            title: "Backend Development",
            description: "Creating robust APIs and server-side logic with Node.js and Express.",
            icon: Server,
            featured: false,
          },
          {
            title: "Database Management",
            description: "Designing and managing databases with MongoDB and Supabase.",
            icon: Database,
            featured: false,
          },
          {
            title: "Full Stack Solutions",
            description: "End-to-end web application development and deployment.",
            icon: Code,
            featured: false,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-3xl transition-all hover:-translate-y-1 duration-300 ${service.featured ? "bg-[#02021E] text-white" : "bg-gray-50 text-gray-900"
              }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`mb-6 ${service.featured ? "relative w-16 h-16 flex items-center justify-center" : ""}`}
            >
              {service.featured ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl opacity-20 blur-lg" />
                  <service.icon className="w-8 h-8 relative z-10 text-white" />
                </>
              ) : (
                <service.icon className="w-8 h-8 text-gray-400" />
              )}
            </div>
            <h3 className={`text-xl font-bold mb-3 ${service.featured ? "text-white" : "text-gray-900"}`}>
              {service.title}
            </h3>
            <p className={service.featured ? "text-gray-400" : "text-gray-600"}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>

          {/* Skills Section */}
          <div  id="skills" className="light-section py-24 md:py-32 px-6 relative overflow-hidden bg-white">
  <div className="absolute top-20 right-0 text-[12rem] md:text-[20rem] font-bold text-gray-300/40 leading-none select-none pointer-events-none">
    02
  </div>

  <div className="max-w-[1400px] mx-auto relative z-10">
    <motion.div
      className="mb-20 flex flex-col items-end text-right ml-auto max-w-4xl"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="text-teal-600 text-sm font-semibold tracking-[0.4em] mb-4 uppercase">Expertise & Proficiency</p>
      <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
        Skills that power
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900">your success.</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-xl">
        Full Stack Developer with 1+ years of experience building modern web applications using MERN stack and Supabase.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="group bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl hover:border-teal-100 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <div className={`mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            <skill.icon size={32} />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">{skill.category}</h3>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">{skill.description}</p>

          <div className="space-y-6">
            {skill.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-teal-500" />
                    {item.name}
                  </span>
                  <span className="text-xs font-bold text-gray-400">{item.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (itemIndex * 0.1) }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

          {/* Recent Projects */}
          <div className="light-section py-24 md:py-32 px-6 relative overflow-hidden bg-white">
            {/* Background Number */}
            <div className="absolute top-20 left-0 text-[12rem] md:text-[20rem] font-bold text-gray-200/40 leading-none select-none pointer-events-none">
              03
            </div>

            <div className="max-w-[1400px] mx-auto">
              <motion.div
                className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p className="text-gray-500 text-sm font-semibold tracking-[0.2em] mb-8">RECENT PROJECTS</p>
                  <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-8 leading-[1.2] tracking-tight">
                    Find out how our skills can
                    <br />
                    contribute to your success.
                  </h2>
                </div>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="rounded-full border-gray-300 px-8 py-6 text-base mt-6 lg:mt-0 hover:bg-gray-100 transition-colors duration-300 bg-transparent"
                  >
                    View All <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                        <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-4 py-2 text-sm transition-colors duration-300">
                          View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="CTA" className="relative py-24 md:py-32 px-6 overflow-hidden rounded-[2.5rem]">
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
                Transform concepts into captivating user experiences
              </h2>
              <ContactModal>
                <Button className="bg-teal-500 hover:bg-teal-600 rounded-full px-8 py-6 text-base transition-colors duration-300">
                  Contact me today <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactModal>
            </motion.div>
            <div className="flex flex-col gap-6 absolute top-1/2 -translate-y-1/2 right-6 md:right-12">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  <Icon size={36} className="hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
       <section className="bg-[#011520] text-white py-16 md:py-20 px-6 rounded-[2.5rem]">
  <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
    <div>
      <h4 className="font-bold mb-6 text-lg">Navigation</h4>
      <ul className="space-y-4">
        <li>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
            Projects
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-6 text-lg">Expertise</h4>
      <ul className="space-y-4">
        <li>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
            MERN Stack
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
            Frontend Development
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
            Backend Development
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
            Supabase
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-6 text-lg">Connect</h4>
      <ul className="space-y-4">
        <li>
          <a href="https://www.linkedin.com/in/zamar-masood/" className="text-gray-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/zamar-masood" className="text-gray-400 hover:text-white transition-colors duration-300">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:zamarmasood@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
            Email
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-6 text-lg">Let's Build Together</h4>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Ready to bring your ideas to life? I'm available for freelance projects and collaborations. Let's create something amazing!
      </p>
      <ContactModal>
        <Button className="bg-teal-500 hover:bg-teal-600 rounded-full px-8 py-6 text-base transition-colors duration-300">
          Contact me <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </ContactModal>
    </div>
  </div>
</section>
      </div>
    </div>
  )
}