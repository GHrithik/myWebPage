'use client'

import { Frame } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center px-4">
      <header className="w-full max-w-6xl flex justify-between items-center py-4">
        <Link href="#" className="flex items-center gap-2">
          <div className="bg-[#00ff9d] rounded-full w-10 h-10 flex items-center justify-center text-black font-bold">
            RV
          </div>
        </Link>
        <nav>
          <Link 
            href="https://v0-my-resume-r3g5xlrvomb-aitrs7c0z.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white hover:text-[#00ff9d] transition-colors"
          >
            Visit Site
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl w-full gap-6">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full border-4 border-[#00ff9d]">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={192}
              height={192}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xl">HI THERE 👋 I'M</p>
          <h1 className="text-5xl font-bold">
            Ritik
            <br />
            Verma
          </h1>
          <p className="text-[#00ff9d] text-xl">Web Developer</p>
        </div>

        <p className="text-gray-400 max-w-xl">
          Specializing in building robust backend systems using Spring Boot,
          delivering scalable and efficient solutions for modern applications.
        </p>

        <div className="flex gap-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Frame className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Frame className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Frame className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Frame className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </main>
    </div>
  )
}

