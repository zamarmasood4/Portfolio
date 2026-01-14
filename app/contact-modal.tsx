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
      href: "mailto:zamarmasood4@gmail.com",
      username: "zamarmasood4@gmail.com",
      color: "hover:bg-red-500/20 hover:border-red-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zamar-masood-06b1942b3/",
      username: "zamar-masood",
      color: "hover:bg-blue-500/20 hover:border-blue-500/50",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/zamarmasood4",
      username: "@zamarmasood4",
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
      href: "https://instagram.com/zamar_masood4",
      username: "@zamar_masood4",
      color: "hover:bg-pink-500/20 hover:border-pink-500/50",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/03015894547",
      username: "+923015894547",
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
