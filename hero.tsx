"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactModal from "./contact-modal"

export default function Hero() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden rounded-[2.5rem]">
      {/* Background with waves */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(2,84,100,0.5) 0%, rgba(1,46,64,0.5) 50%, rgba(27,27,58,0.8) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1000c100-50 200-50 300 0s200 50 300 0 200-50 300 0 200 50 300 0 200 50 300 0V0H0z' fill='%23025464' fill-opacity='0.2'/%3E%3C/svg%3E")
          `,
          backgroundSize: "cover, 200% 200%",
          backgroundPosition: "center, 0% 0%",
          animation: "wave 15s infinite linear",
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 w-full py-8 flex justify-between items-center z-10 px-8">
        <div className="relative w-[4.5rem] h-[4.5rem]">
          <Image
            src="/placeholder.svg"
            alt="Profile"
            fill
            className="rounded-full border-2 border-white/20 object-cover"
          />
        </div>
        <div className="flex gap-14 text-lg font-light tracking-wide">
          <a href="#projects" className="text-white/90 hover:text-white transition-colors">
            Project
          </a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors">
            About
          </a>
          <ContactModal>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </a>
          </ContactModal>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-2xl text-white/90 mb-6 font-light tracking-wide">Visual & UX Designer</h2>
        <h1 className="text-7xl md:text-[5.5rem] font-bold text-white mb-8 tracking-tight leading-none">
          Zamar Masood
        </h1>
        <p className="max-w-3xl text-white/80 text-xl mb-12 leading-relaxed font-light">
          I'm not only a web designer but web developer as well. I specialize in UI design & graphic design.
        </p>
        <Button
          variant="outline"
          className="rounded-full border border-white/20 text-white hover:bg-white/10 px-10 py-6 text-base font-light"
        >
          Download CV
        </Button>

        {/* Rotating Circle */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <div
            className="relative w-40 h-40"
            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s linear" }}
          >
            {/* Outer circle with text */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
              <defs>
                <path id="circle" d="M 80,80 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
              </defs>
              <text className="text-[16px] fill-white/60">
                <textPath href="#circle" startOffset="0%">
                  CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME •
                </textPath>
              </text>
            </svg>

            {/* Center play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-white/20 transition-colors">
                <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#011520]/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#011520]/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(1,37,52,0.8),transparent_70%)]" />
    </div>
  )
}
