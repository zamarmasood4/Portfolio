"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactModal({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#011520] text-white border-[#025464]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Contact Me</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below to send me a message. I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-[#012E40] border-[#025464] text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-[#012E40] border-[#025464] text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              className="bg-[#012E40] border-[#025464] text-white placeholder-gray-500"
            />
          </div>
          <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
            Send Message
          </Button>
        </form>
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-2">Connect with me on social media:</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
