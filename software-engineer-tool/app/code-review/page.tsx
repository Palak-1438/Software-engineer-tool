import type { Metadata } from "next"
import { CheckCircle, Clock, GitBranch, GitPullRequest, MessageSquare, Plus, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeReviewSubmission } from "@/components/code-review-submission"
import { CodeReviewDetail } from "@/components/code-review-detail"
import { BookDivider } from "@/components/book-divider"

export const metadata: Metadata = {
  title: "Code Review - Software Engineer Enhancement Tool",
  description: "Request and manage code reviews for your projects",
}

export default function CodeReviewPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight book-title">Code Review</h1>
          <Button className="bg-[hsl(200,65%,55%)] hover:bg-[hsl(200,65%,45%)]">
            <Plus className="mr-2 h-4 w-4" />
            New Review Request
          </Button>
        </div>

        <Tabs defaultValue="active" className="space-y-4">
          <TabsList className="bg-[hsl(30,15%,90%)] p-1">
            <TabsTrigger value="active">Active Reviews</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="new">New Request</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="book-page">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-xs font-medium">
                      In Progress
                    </div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                  <CardTitle className="mt-2">User Authentication Service</CardTitle>
                  <CardDescription>Spring Security implementation review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitPullRequest className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>PR #42: Add JWT authentication</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <GitBranch className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>feature/jwt-auth</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>Reviewer: Sarah Johnson</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MessageSquare className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>5 comments</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-xs font-medium">
                      Awaiting Review
                    </div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>
                  <CardTitle className="mt-2">Data Access Layer</CardTitle>
                  <CardDescription>Spring Data JPA repository implementation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitPullRequest className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>PR #45: Refactor DAO layer</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <GitBranch className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>refactor/data-access</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>Reviewer: Pending</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MessageSquare className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>0 comments</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-xs font-medium">
                      Changes Requested
                    </div>
                    <div className="text-sm text-muted-foreground">3 days ago</div>
                  </div>
                  <CardTitle className="mt-2">API Rate Limiting</CardTitle>
                  <CardDescription>Implementation of rate limiting for REST endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitPullRequest className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>PR #38: Add rate limiting</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <GitBranch className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>feature/rate-limiting</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>Reviewer: Michael Chen</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MessageSquare className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>8 comments</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            </div>

            <BookDivider />

            <CodeReviewDetail />
          </TabsContent>

          <TabsContent value="submitted" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="book-page">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">Submitted</div>
                    <div className="text-sm text-muted-foreground">5 days ago</div>
                  </div>
                  <CardTitle className="mt-2">Caching Implementation</CardTitle>
                  <CardDescription>Redis cache integration for API responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitPullRequest className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>PR #36: Add Redis caching</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>For: Team Alpha</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>Awaiting feedback</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Submission</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="book-page">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium">Approved</div>
                    <div className="text-sm text-muted-foreground">2 weeks ago</div>
                  </div>
                  <CardTitle className="mt-2">Logging Framework</CardTitle>
                  <CardDescription>Centralized logging with ELK stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitPullRequest className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>PR #30: Implement logging</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>Reviewer: Lisa Wong</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>Merged on April 15, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Review</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium">Approved</div>
                    <div className="text-sm text-muted-foreground">3 weeks ago</div>
                  </div>
                  <CardTitle className="mt-2">Error Handling</CardTitle>
                  <CardDescription>Global exception handling for REST APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <GitPullRequest className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>PR #28: Global exception handler</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-[hsl(200,65%,55%)]" />
                      <span>Reviewer: David Kim</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span>Merged on April 5, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Review</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="new">
            <Card className="book-page">
              <CardHeader>
                <CardTitle>New Code Review Request</CardTitle>
                <CardDescription>Submit your code for review by peers or AI</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeReviewSubmission />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
