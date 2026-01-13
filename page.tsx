import Image from "next/image"
import { ArrowUpRight, MonitorSmartphone, Code, PenTool, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero from "./hero"
import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
import ContactModal from "./contact-modal"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function Portfolio() {
  return (
    <div className={`min-h-screen bg-[#011520] text-white ${spaceGrotesk.className}`}>
      <div className="px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 pt-8">
        <Hero />

        {/* Featured and Projects Section */}
        <section className="rounded-[2.5rem] bg-white text-gray-900 overflow-hidden shadow-2xl">
          {/* Featured Section */}
          <div className="py-32 md:py-40 px-6 relative overflow-hidden">
            {/* Background Number */}
            <div className="absolute top-20 left-0 text-[12rem] md:text-[20rem] font-bold text-gray-200/40 leading-none select-none pointer-events-none">
              01
            </div>

            <div className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
                {/* Left Column */}
                <div className="relative z-10">
                  <p className="text-gray-500 text-sm font-semibold tracking-[0.2em] mb-8">FEATURED</p>
                  <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 mb-8 leading-[1.2] tracking-tight">
                    I have a great passion.
                    <br />
                    I'm trying to give solution
                    <br />
                    with creative design.
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-12">
                    I have currently 3.5 years of experience in visual design & graphics design. To be honest, my skills
                    started to take shape when I interned at a company, and I continue to learn and strive to improve.
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
                </div>

                {/* Right Column - Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Visual Design",
                      description: "Designing interfaces that are effective and easy to use by users and customers.",
                      icon: Eye,
                      featured: false,
                    },
                    {
                      title: "Web Design",
                      description: "Implementation of static page coding from the designed interface.",
                      icon: MonitorSmartphone,
                      featured: true,
                    },
                    {
                      title: "Web Develop",
                      description: "Development on the web to make the functionality work.",
                      icon: Code,
                      featured: false,
                    },
                    {
                      title: "Graphic Design",
                      description: "Helping start-up companies to make an excellent brand.",
                      icon: PenTool,
                      featured: false,
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`p-8 rounded-3xl transition-all hover:-translate-y-1 duration-300 ${
                        service.featured ? "bg-[#02021E] text-white" : "bg-gray-50 text-gray-900"
                      }`}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="py-32 md:py-40 px-6 relative overflow-hidden bg-gray-50">
            {/* Background Number */}
            <div className="absolute top-20 right-0 text-[12rem] md:text-[20rem] font-bold text-gray-200/40 leading-none select-none pointer-events-none">
              02
            </div>

            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 relative z-10">
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
                    className="rounded-full border-gray-300 px-8 py-6 text-base mt-6 lg:mt-0 hover:bg-gray-100 transition-colors duration-300"
                  >
                    View All <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {[
                  {
                    title: "Mobile App Design",
                    image: "/placeholder.svg",
                    category: "UI/UX Design",
                    description:
                      "Made with various graphic softwares, using shapes and paths to create clean and scalable illustrations.",
                  },
                  {
                    title: "Vector Illustration",
                    image: "/placeholder.svg",
                    category: "Graphic Design",
                    description:
                      "Made with various graphic softwares, using shapes and paths to create clean and scalable illustrations.",
                  },
                  {
                    title: "Social Media App",
                    image: "/placeholder.svg",
                    category: "Development",
                    description:
                      "Made with various graphic softwares, using shapes and paths to create clean and scalable illustrations.",
                  },
                  {
                    title: "Dashboard Design",
                    image: "/placeholder.svg",
                    category: "UI/UX Design",
                    description:
                      "Made with various graphic softwares, using shapes and paths to create clean and scalable illustrations.",
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 md:p-10 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <p className="text-teal-400 mb-3 font-medium">{project.category}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 max-w-md text-lg">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 md:py-40 px-6 overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#012E40] via-[#025464] to-[#1B1B3A]" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-8 leading-[1.2]">
                Transform concepts into captivating user experiences
              </h2>
              <ContactModal>
                <Button className="bg-teal-500 hover:bg-teal-600 rounded-full px-8 py-6 text-base transition-colors duration-300">
                  Contact me today <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactModal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-[#011520] text-white py-20 md:py-24 px-6 rounded-[2.5rem]">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            <div>
              <h4 className="font-bold mb-6 text-lg">Navigation</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    UX/Visual Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Social Media</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Be Creative, Be Solutive</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I am available for new projects and collaborations. Let's work together to create something amazing!
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
