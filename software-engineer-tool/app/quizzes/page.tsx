import type { Metadata } from "next"
import { QuizPanel } from "@/components/quiz-panel"

export const metadata: Metadata = {
  title: "Quizzes - Software Engineer Enhancement Tool",
  description: "Test your knowledge with context-aware quizzes",
}

export default function QuizzesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight book-title">Interactive Quizzes</h1>
        </div>
        <div className="grid gap-4">
          <QuizPanel />
        </div>
      </main>
    </div>
  )
}
