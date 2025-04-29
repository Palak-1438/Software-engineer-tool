import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, FileCode, LineChart, Play, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeAnalysisPanel } from "@/components/code-analysis-panel"
import { QuizPanel } from "@/components/quiz-panel"
import { RecentActivity } from "@/components/recent-activity"
import { SkillProgress } from "@/components/skill-progress"
import { DecorativeBookCorner } from "@/components/decorative-book-corner"
import { BookDivider } from "@/components/book-divider"

export const metadata: Metadata = {
  title: "Software Engineer Enhancement Tool",
  description: "AI-Powered tool to assist software engineers in streamlining tasks",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight book-title">Your Learning Journey</h1>
          <Button className="bg-[hsl(200,65%,55%)] hover:bg-[hsl(200,65%,45%)]">
            <Terminal className="mr-2 h-4 w-4" />
            Open IDE Integration
          </Button>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-[hsl(30,15%,90%)] p-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="code-analysis">Code Analysis</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="book-page">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Code Quality Score</CardTitle>
                  <FileCode className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87/100</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last week</p>
                </CardContent>
              </Card>
              <Card className="book-page">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Bugs Fixed</CardTitle>
                  <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">+5 from last week</p>
                </CardContent>
              </Card>
              <Card className="book-page">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
                  <Play className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+3 from last week</p>
                </CardContent>
              </Card>
              <Card className="book-page">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Skill Progress</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+15%</div>
                  <p className="text-xs text-muted-foreground">Java Spring Boot skills</p>
                </CardContent>
              </Card>
            </div>
            <BookDivider />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="book-page col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>
              <Card className="book-page col-span-3">
                <CardHeader>
                  <CardTitle>Skill Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillProgress />
                </CardContent>
              </Card>
            </div>
            <BookDivider />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Code Analysis</CardTitle>
                  <CardDescription>Analyze your code for quality and best practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <div className="text-sm text-muted-foreground">
                    Upload your Java code to get instant feedback on code quality, potential bugs, and performance
                    issues.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/code-analysis">
                      Start Analysis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Interactive Quizzes</CardTitle>
                  <CardDescription>Test your knowledge with context-aware quizzes</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <div className="text-sm text-muted-foreground">
                    Take quizzes tailored to your skill level and learning goals. Get instant feedback and explanations.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/quizzes">
                      Start Quiz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Guided Learning</CardTitle>
                  <CardDescription>Follow personalized learning paths</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <div className="text-sm text-muted-foreground">
                    Get personalized recommendations for learning resources based on your skill gaps and goals.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/learning">
                      View Path
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="code-analysis" className="space-y-4">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>Code Analysis</CardTitle>
                <CardDescription>Upload your Java code for analysis or paste it directly</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeAnalysisPanel />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="quizzes" className="space-y-4">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>Interactive Quizzes</CardTitle>
                <CardDescription>Test your knowledge with context-aware quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <QuizPanel />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="learning" className="space-y-4">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>Learning Paths</CardTitle>
                <CardDescription>Personalized learning recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Spring Boot Fundamentals</h3>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 w-3/4 rounded-full bg-green-500"></div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">75% complete</p>
                    <Button className="mt-4" size="sm">
                      Continue Learning
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Advanced Java Concurrency</h3>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 w-1/4 rounded-full bg-green-500"></div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">25% complete</p>
                    <Button className="mt-4" size="sm">
                      Continue Learning
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Design Patterns in Java</h3>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 w-1/2 rounded-full bg-green-500"></div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">50% complete</p>
                    <Button className="mt-4" size="sm">
                      Continue Learning
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
