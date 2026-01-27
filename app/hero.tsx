"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [rotation, setRotation] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navTextColor, setNavTextColor] = useState('light') // 'light' or 'dark'

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)
      
      // Get all sections
      const heroSection = document.getElementById('hero')
      const aboutSection = document.getElementById('about')
      const skillsSection = document.getElementById('skills')
      const projectsSection = document.getElementById('projects')
      const ctaSection = document.getElementById('CTA')
      const footerSection = document.querySelector('section.bg-\\[\\#011520\\]') // Footer section
      
      // Determine which section is currently in view
      // Hero section (0 to about section)
      if (scrollY < (aboutSection?.offsetTop || Infinity)) {
        setNavTextColor('light') // Hero has dark background
      }
      // About, Skills, Projects sections (white backgrounds)
      else if (
        (aboutSection && scrollY >= aboutSection.offsetTop - 100 && scrollY < (skillsSection?.offsetTop || Infinity)) ||
        (skillsSection && scrollY >= skillsSection.offsetTop - 100 && scrollY < (projectsSection?.offsetTop || Infinity)) ||
        (projectsSection && scrollY >= projectsSection.offsetTop - 100 && scrollY < (ctaSection?.offsetTop || Infinity))
      ) {
        setNavTextColor('dark') // White background sections
      }
      // CTA and Footer sections (dark backgrounds)
      else if (
        (ctaSection && scrollY >= ctaSection.offsetTop - 100) ||
        (footerSection && scrollY >= footerSection.offsetTop - 100)
      ) {
        setNavTextColor('light') // Dark background sections
      } else {
        setNavTextColor('light') // Default to light
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for more accurate detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            
            // Define sections with white backgrounds (dark text)
            const whiteBackgroundSections = ['about', 'skills', 'projects']
            // Define sections with dark backgrounds (light text)
            const darkBackgroundSections = ['CTA']
            
            if (whiteBackgroundSections.includes(sectionId)) {
              setNavTextColor('dark')
            } else if (darkBackgroundSections.includes(sectionId)) {
              setNavTextColor('light')
            }
          }
        })
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    )
    
    // Observe all relevant sections
    const sections = ['about', 'skills', 'projects', 'CTA']
    sections.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "CTA", label: "Contact" },
  ]

  // Get text color classes based on state
  const textColorClass = navTextColor === 'dark' 
    ? 'text-gray-800 hover:text-gray-900' 
    : 'text-white/90 hover:text-white'
  
  const underlineColorClass = navTextColor === 'dark' 
    ? 'bg-gray-800' 
    : 'bg-white/80'
  
  const iconColorClass = navTextColor === 'dark' 
    ? 'text-gray-800' 
    : 'text-white'

  return (
    <div id="hero" className="relative min-h-screen overflow-hidden rounded-[2.5rem]">
      {/* Background with gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(1,21,32,0.7), rgba(1,21,32,0.5))',
          }}
        />
      </div>

      {/* Smart Navbar with adaptive text color */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/5 backdrop-blur-xl shadow-lg rounded-full' 
          : 'bg-transparent'
      }`}>
        <div className="relative">
          {/* Grainy texture overlay for scrolled state */}
          {scrolled && (
            <div className="absolute inset-0 rounded-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wMiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay rounded-full" />
          )}
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center px-8 py-3 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-transparent' : ''
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group ${textColorClass}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px group-hover:w-8 transition-all duration-300 ${underlineColorClass}`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden px-4 py-3 transition-all duration-500 rounded-full ${
              scrolled 
                ? 'bg-white/5 backdrop-blur-xl' 
                : 'bg-transparent'
            }`}
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 ${iconColorClass}`} />
            ) : (
              <Menu className={`w-5 h-5 ${iconColorClass}`} />
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`absolute top-full left-0 mt-2 md:hidden rounded-2xl p-4 min-w-[180px] backdrop-blur-xl shadow-xl transition-all duration-300 ${
              scrolled ? 'bg-white/5' : 'bg-white/5'
            }`}>
              {scrolled && (
                <div className="absolute inset-0 rounded-2xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wMyIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay rounded-2xl" />
              )}
              
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-4 py-3 text-sm font-medium tracking-wide text-left transition-all duration-300 rounded-lg hover:bg-white/10 ${textColorClass}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16">
        <h2 className="text-2xl text-white/90 mb-6 font-light tracking-wide">Full Stack Web Developer</h2>
        <h1 className="text-7xl md:text-[5.5rem] font-bold text-white mb-8 tracking-tight leading-none">
          Zamar Masood
        </h1>
        <p className="max-w-3xl text-white/80 text-xl mb-12 leading-relaxed font-light">
          I'm a Full Stack Web Developer with 1+ years of experience building modern, scalable web applications.
        </p>

        <a href="/Zamar_Masood.pdf" download>
  <Button
    variant="outline"
    className="rounded-full border border-white/20 text-white bg-white/10 hover:bg-white/20 px-10 py-6 text-base font-light"
  >
    Download CV
  </Button>
</a>


        {/* Rotating Circle */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <div
            className="relative w-40 h-40"
            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s linear" }}
          >
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-white/20 transition-colors">
                <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#011520]/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#011520]/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(1,37,52,0.8),transparent_70%)]" />
    </div>
  )
}