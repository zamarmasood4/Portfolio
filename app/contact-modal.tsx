"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Github, Twitter, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function ContactModal({ children }: { children: React.ReactNode }) {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@example.com",
      username: "hello@example.com",
      color: "hover:bg-red-500/20 hover:border-red-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      username: "@yourprofile",
      color: "hover:bg-blue-500/20 hover:border-blue-500/50",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourprofile",
      username: "@yourprofile",
      color: "hover:bg-gray-500/20 hover:border-gray-500/50",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/yourprofile",
      username: "@yourprofile",
      color: "hover:bg-sky-500/20 hover:border-sky-500/50",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/yourprofile",
      username: "@yourprofile",
      color: "hover:bg-pink-500/20 hover:border-pink-500/50",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/1234567890",
      username: "+1 234 567 890",
      color: "hover:bg-green-500/20 hover:border-green-500/20",
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#011520] text-white border-[#025464]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-gray-400">Choose your preferred way to connect with me.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-xl border border-[#025464] bg-[#012E40] transition-all duration-300 ${link.color}`}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <link.icon size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">{link.name}</p>
                <p className="text-sm text-gray-400">{link.username}</p>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
