import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Software Engineer Enhancement Tool",
  description: "AI-Powered tool to assist software engineers in streamlining tasks",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[hsl(44,36%,95%)]`}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 overflow-auto book-cover">{children}</div>
        </div>
      </body>
    </html>
  )
}
