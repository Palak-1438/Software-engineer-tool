import type { Metadata } from "next"
import { CodeAnalysisPanel } from "@/components/code-analysis-panel"

export const metadata: Metadata = {
  title: "Code Analysis - Software Engineer Enhancement Tool",
  description: "Analyze your Java code for quality and best practices",
}

export default function CodeAnalysisPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight book-title">Code Analysis</h1>
        </div>
        <div className="grid gap-4">
          <CodeAnalysisPanel />
        </div>
      </main>
    </div>
  )
}
