import type { Metadata } from "next"
import { CheckCircle, Clock, Code, FileText, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DecorativeBookCorner } from "@/components/decorative-book-corner"
import { BookDivider } from "@/components/book-divider"
import { LearningModule } from "@/components/learning-module"

export const metadata: Metadata = {
  title: "Learning - Software Engineer Enhancement Tool",
  description: "Personalized learning paths for software engineers",
}

export default function LearningPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight book-title">Learning Paths</h1>
          <Button className="bg-[hsl(200,65%,55%)] hover:bg-[hsl(200,65%,45%)]">
            <Star className="mr-2 h-4 w-4" />
            Recommended For You
          </Button>
        </div>

        <Tabs defaultValue="in-progress" className="space-y-4">
          <TabsList className="bg-[hsl(30,15%,90%)] p-1">
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          </TabsList>

          <TabsContent value="in-progress" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="book-page">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Spring Boot Fundamentals</CardTitle>
                    <div className="bg-[hsl(200,65%,90%)] text-[hsl(200,65%,40%)] px-2 py-1 rounded-md text-xs font-medium">
                      75% Complete
                    </div>
                  </div>
                  <CardDescription>Master the basics of Spring Boot development</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <Progress value={75} className="h-2 colorful-progress mb-4" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Introduction to Spring Boot</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Completed</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">REST API Development</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Completed</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Data Access with Spring Data JPA</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Completed</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Spring Security Basics</span>
                      </div>
                      <span className="text-xs text-muted-foreground">In Progress</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-300 mr-2" />
                        <span className="text-sm text-muted-foreground">Testing Spring Boot Applications</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Not Started</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Continue Learning</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Design Patterns in Java</CardTitle>
                    <div className="bg-[hsl(200,65%,90%)] text-[hsl(200,65%,40%)] px-2 py-1 rounded-md text-xs font-medium">
                      50% Complete
                    </div>
                  </div>
                  <CardDescription>Learn essential design patterns for better code architecture</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <Progress value={50} className="h-2 colorful-progress mb-4" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Introduction to Design Patterns</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Completed</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Creational Patterns</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Completed</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="text-sm">Structural Patterns</span>
                      </div>
                      <span className="text-xs text-muted-foreground">In Progress</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-300 mr-2" />
                        <span className="text-sm text-muted-foreground">Behavioral Patterns</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Not Started</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-300 mr-2" />
                        <span className="text-sm text-muted-foreground">Real-world Applications</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Not Started</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Continue Learning</Button>
                </CardFooter>
              </Card>
            </div>

            <BookDivider />

            <Card className="book-page">
              <CardHeader>
                <CardTitle>Current Lesson: Spring Security Basics</CardTitle>
                <CardDescription>Learn how to secure your Spring Boot applications</CardDescription>
              </CardHeader>
              <CardContent>
                <LearningModule />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommended" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Microservices with Spring Cloud</CardTitle>
                  <CardDescription>Build scalable distributed systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground ml-2">(124 ratings)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Based on your progress in Spring Boot Fundamentals, this course will help you take your skills to
                    the next level.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 hours</span>
                    <FileText className="h-4 w-4 ml-3 mr-1" />
                    <span>12 lessons</span>
                    <Code className="h-4 w-4 ml-3 mr-1" />
                    <span>5 projects</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Advanced Java Concurrency</CardTitle>
                  <CardDescription>Master multithreading and parallel processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-muted-foreground ml-2">(87 ratings)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recommended based on your interest in performance optimization and system design.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10 hours</span>
                    <FileText className="h-4 w-4 ml-3 mr-1" />
                    <span>15 lessons</span>
                    <Code className="h-4 w-4 ml-3 mr-1" />
                    <span>8 projects</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Test-Driven Development</CardTitle>
                  <CardDescription>Write better code through testing</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground ml-2">(156 ratings)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recommended to improve your code quality and reduce bugs in your applications.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 hours</span>
                    <FileText className="h-4 w-4 ml-3 mr-1" />
                    <span>9 lessons</span>
                    <Code className="h-4 w-4 ml-3 mr-1" />
                    <span>4 projects</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="book-page">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Java Basics</CardTitle>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium">
                      Completed
                    </div>
                  </div>
                  <CardDescription>Fundamentals of Java programming</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <Progress value={100} className="h-2 bg-gray-200 mb-4">
                    <div className="h-full bg-green-500 rounded-full"></div>
                  </Progress>
                  <p className="text-sm text-muted-foreground">Completed on April 15, 2023</p>
                  <div className="mt-4 flex items-center">
                    <div className="text-sm font-medium">Your score:</div>
                    <div className="ml-2 text-sm font-bold">95%</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Certificate</Button>
                  <Button variant="outline">Review Material</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Git & GitHub</CardTitle>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium">
                      Completed
                    </div>
                  </div>
                  <CardDescription>Version control and collaboration</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <Progress value={100} className="h-2 bg-gray-200 mb-4">
                    <div className="h-full bg-green-500 rounded-full"></div>
                  </Progress>
                  <p className="text-sm text-muted-foreground">Completed on March 3, 2023</p>
                  <div className="mt-4 flex items-center">
                    <div className="text-sm font-medium">Your score:</div>
                    <div className="ml-2 text-sm font-bold">88%</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Certificate</Button>
                  <Button variant="outline">Review Material</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookmarked" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Reactive Programming with Spring WebFlux</CardTitle>
                  <CardDescription>Build non-blocking reactive applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to build reactive applications with Spring WebFlux and Project Reactor.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12 hours</span>
                    <FileText className="h-4 w-4 ml-3 mr-1" />
                    <span>18 lessons</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>

              <Card className="book-page">
                <CardHeader>
                  <CardTitle>Cloud-Native Java</CardTitle>
                  <CardDescription>Building microservices for the cloud</CardDescription>
                </CardHeader>
                <CardContent>
                  <DecorativeBookCorner />
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to build and deploy Java applications in cloud environments.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>15 hours</span>
                    <FileText className="h-4 w-4 ml-3 mr-1" />
                    <span>20 lessons</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
