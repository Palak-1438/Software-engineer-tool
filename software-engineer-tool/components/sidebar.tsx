import Link from "next/link"
import { BookOpen, FileCode, GitBranch, LayoutDashboard, Play, Settings, Terminal, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <div className="hidden book-spine lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-white">
            <BookMarked className="h-6 w-6" />
            <span className="book-title">SE Handbook</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Button asChild variant="ghost" className="justify-start text-white book-tab">
              <Link href="/">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start text-white book-tab">
              <Link href="/code-analysis">
                <FileCode className="mr-2 h-4 w-4" />
                Code Analysis
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start text-white book-tab">
              <Link href="/quizzes">
                <Play className="mr-2 h-4 w-4" />
                Quizzes
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start text-white book-tab">
              <Link href="/learning">
                <BookOpen className="mr-2 h-4 w-4" />
                Learning
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start text-white book-tab">
              <Link href="/code-review">
                <GitBranch className="mr-2 h-4 w-4" />
                Code Review
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start text-white book-tab">
              <Link href="/ide-integration">
                <Terminal className="mr-2 h-4 w-4" />
                IDE Integration
              </Link>
            </Button>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button
            asChild
            variant="outline"
            className="w-full justify-start bg-[rgba(255,255,255,0.1)] text-white border-[rgba(255,255,255,0.2)]"
          >
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
